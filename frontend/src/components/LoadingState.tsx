import { CircularProgress, Stack, Typography } from "@mui/material";

type LoadingStateProps = {
  label?: string;
};

export function LoadingState({ label = "Loading..." }: LoadingStateProps) {
  return (
    <Stack alignItems="center" spacing={1.5} sx={{ py: 10 }}>
      <CircularProgress />
      <Typography color="text.secondary">{label}</Typography>
    </Stack>
  );
}
