import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { SectionTitle } from "../components/SectionTitle";
import { useSiteContent } from "../content/SiteContentContext";
import { usePageSeo } from "../seo";

export function TicketPage() {
  const { home, ticket } = useSiteContent();
  usePageSeo({
    title: "Taxi Fare Chart",
    description: "View airport, local, outstation, and running charge pricing for Dream Destinations Travel vehicles.",
    path: "/ticket"
  });

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <SectionTitle title={ticket.section.title} />
      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#2341A8" }}>
              {ticket.tableHeaders.map((header) => (
                <TableCell key={header} sx={{ color: "#fff", fontWeight: 700, fontSize: "1.2rem" }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {home.fareRows.map((row, index) => (
              <TableRow key={row.type} sx={{ bgcolor: index % 2 === 0 ? "#F5F7FB" : "#E9EDF5" }}>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.airport}</TableCell>
                <TableCell>{row.roundTrip}</TableCell>
                <TableCell>{row.oneWay}</TableCell>
                <TableCell>{row.fullDay}</TableCell>
                <TableCell>{row.insideCity}</TableCell>
                <TableCell>{row.outsideCity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={3}>
        <Typography color="text.secondary">{ticket.note}</Typography>
      </Box>
    </Container>
  );
}
