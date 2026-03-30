import { Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
};

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <Stack
      spacing={1.3}
      sx={{
        mb: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}
    >
      <Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
        {icon} {title}
      </Typography>
      {subtitle ? (
        <Typography color="text.secondary" sx={{ maxWidth: 940, fontSize: { xs: "1rem", md: "1.35rem" } }}>
          {subtitle}
        </Typography>
      ) : null}
    </Stack>
  );
}
