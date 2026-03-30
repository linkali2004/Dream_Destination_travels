import { Fab, Stack } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import { useSiteContent } from "../content/SiteContentContext";

export function FloatingActions() {
  const { floatingActions } = useSiteContent();

  return (
    <Stack spacing={2} sx={{ position: "fixed", right: 22, bottom: 24, zIndex: 1300 }}>
      <Fab color="success" size="medium" aria-label={floatingActions.whatsappLabel} href={floatingActions.whatsappUrl} target="_blank">
        <WhatsAppIcon />
      </Fab>
      <Fab color="primary" size="medium" aria-label={floatingActions.callLabel} href={floatingActions.callUrl}>
        <CallIcon />
      </Fab>
    </Stack>
  );
}
