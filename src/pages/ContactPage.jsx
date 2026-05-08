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
    <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
      <Stack spacing={1.5} sx={{ mb: 4.5, maxWidth: 860 }}>
        <Chip label="Contact" sx={{ width: "fit-content", bgcolor: "secondary.light", fontWeight: 800 }} />
        <Typography variant="h1" sx={{ fontSize: { xs: "2.4rem", md: "4rem" } }}>
          Request a quote for mowing, maintenance, or seasonal cleanup.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85 }}>
          The contact page stays simple: clear service area, direct contact information,
          and no unnecessary steps between a visitor and a quote request.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
          gap: 2.5,
        }}
      >
        <Card>
          <CardContent sx={{ p: 3.5 }}>
            <Typography variant="h4" sx={{ mb: 2.5 }}>
              Direct Contact
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <LocalPhoneOutlinedIcon color="primary" />
                <Link href={phoneHref} underline="hover" color="inherit">
                  {phoneDisplay}
                </Link>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailOutlinedIcon color="primary" />
                <Link href={`mailto:${email}`} underline="hover" color="inherit">
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

        <Card>
          <CardContent sx={{ p: 3.5 }}>
            <Typography variant="h4" sx={{ mb: 2.5 }}>
              Areas Served
            </Typography>
            <Stack direction="row" spacing={1.25} useFlexGap flexWrap="wrap">
              {serviceArea.map((town) => (
                <Chip key={town} label={`${town}, MA`} variant="outlined" />
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default ContactPage;
