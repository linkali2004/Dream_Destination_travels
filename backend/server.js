import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, "data");
const port = Number(process.env.PORT || 3001);
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabasePublishableKey = process.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error("Supabase environment variables are missing for the backend.");
}

const supabase = createClient(supabaseUrl, supabasePublishableKey);

const sendJson = (response, statusCode, payload) => {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  response.end(JSON.stringify(payload));
};

const readData = async (fileName) => {
  const filePath = path.join(dataDir, fileName);
  const raw = await readFile(filePath, "utf-8");
  return JSON.parse(raw);
};

const appendData = async (fileName, entry) => {
  const filePath = path.join(dataDir, fileName);
  const records = await readData(fileName);
  records.push(entry);
  await writeFile(filePath, JSON.stringify(records, null, 2));
  return entry;
};

const readRequestBody = async (request) =>
  new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
    request.on("error", reject);
  });

const routes = {
  "/api/hero-slides": "hero-slides.json",
  "/api/available-vehicles": "available-vehicles.json",
  "/api/fare-table": "fare-table.json"
};

const server = createServer(async (request, response) => {
  try {
    if (request.method === "OPTIONS") {
      sendJson(response, 204, {});
      return;
    }

    if (request.method === "GET" && request.url === "/api/health") {
      sendJson(response, 200, { status: "ok" });
      return;
    }

    if (request.method === "GET" && request.url === "/api/tours") {
      const { data, error } = await supabase
        .from("tours")
        .select("id, name, region, zone, imageurl, description, days, created_at")
        .order("zone")
        .order("region")
        .order("name");

      if (error) {
        throw error;
      }

      sendJson(response, 200, data ?? []);
      return;
    }

    if (request.method === "GET" && request.url === "/api/vehicles") {
      const { data, error } = await supabase
        .from("vehicles")
        .select("id, name, image_url, category")
        .order("category")
        .order("name");

      if (error) {
        throw error;
      }

      sendJson(response, 200, data ?? []);
      return;
    }

    if (request.method === "GET" && request.url && routes[request.url]) {
      const data = await readData(routes[request.url]);
      sendJson(response, 200, data);
      return;
    }

    if (request.method === "POST" && request.url === "/api/inquiries") {
      const payload = await readRequestBody(request);

      if (!payload.fullName || !payload.phoneNumber || !payload.destination || !payload.travelDates) {
        sendJson(response, 400, { message: "Missing required inquiry fields." });
        return;
      }

      const inquiry = {
        id: Date.now(),
        submittedAt: new Date().toISOString(),
        ...payload
      };

      await appendData("inquiries.json", inquiry);
      sendJson(response, 201, { message: "Inquiry submitted successfully.", inquiry });
      return;
    }

    if (request.method === "POST" && request.url === "/api/bookings") {
      const payload = await readRequestBody(request);

      if (!payload.vehicleName) {
        sendJson(response, 400, { message: "Vehicle name is required." });
        return;
      }

      const booking = {
        id: Date.now(),
        submittedAt: new Date().toISOString(),
        ...payload
      };

      await appendData("bookings.json", booking);
      sendJson(response, 201, { message: "Booking request submitted successfully.", booking });
      return;
    }

    sendJson(response, 404, { message: "Route not found." });
  } catch (error) {
    sendJson(response, 500, {
      message: "Internal server error.",
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
});

server.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
