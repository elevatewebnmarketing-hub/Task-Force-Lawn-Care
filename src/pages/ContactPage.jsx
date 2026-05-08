import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { email, phoneDisplay, phoneHref, serviceArea } from "../siteData";

function ContactPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 }, px: { xs: 2, sm: 3 } }}>
      <Stack spacing={1.5} sx={{ mb: 4.5, maxWidth: 860, minWidth: 0 }}>
        <Chip label="Contact" sx={{ width: { xs: "100%", sm: "fit-content" }, bgcolor: "secondary.light", fontWeight: 700 }} />
        <Typography variant="h1" sx={{ fontSize: { xs: "2rem", sm: "2.25rem", md: "3.75rem" } }}>
          Request a quote for mowing, maintenance, or seasonal cleanup.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85 }}>
          Reach out by phone or email to discuss your property, service frequency, and
          the kind of lawn care support you need.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
          gap: 2.5,
        }}
      >
        <Card sx={{ minWidth: 0 }}>
          <CardContent sx={{ p: { xs: 2.25, sm: 3.5 } }}>
            <Typography variant="h4" sx={{ mb: 2.5 }}>
              Direct Contact
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ minWidth: 0 }}>
                <LocalPhoneOutlinedIcon color="primary" />
                <Link href={phoneHref} underline="hover" color="inherit">
                  {phoneDisplay}
                </Link>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ minWidth: 0 }}>
                <EmailOutlinedIcon color="primary" />
                <Link href={`mailto:${email}`} underline="hover" color="inherit" sx={{ overflowWrap: "anywhere" }}>
                  {email}
                </Link>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <LocationOnOutlinedIcon color="primary" sx={{ mt: 0.4 }} />
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  Wareham, Massachusetts 02538
                  <br />
                  Serving South Coast Massachusetts residential and small commercial properties.
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 0 }}>
          <CardContent sx={{ p: { xs: 2.25, sm: 3.5 } }}>
            <Typography variant="h4" sx={{ mb: 2.5 }}>
              Areas Served
            </Typography>
            <Box
              sx={{
                minWidth: 0,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
                gap: 1,
              }}
            >
              {serviceArea.map((town) => (
                <Chip key={town} label={`${town}, MA`} variant="outlined" sx={{ width: "100%", justifyContent: "center" }} />
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default ContactPage;
