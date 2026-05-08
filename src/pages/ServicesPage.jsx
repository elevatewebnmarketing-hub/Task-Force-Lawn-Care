import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { coreServices, phoneDisplay, phoneHref } from "../siteData";

function ServicesPage() {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
      <Stack spacing={1.5} sx={{ mb: 4.5, maxWidth: 860 }}>
        <Chip label="Services" sx={{ width: "fit-content", bgcolor: "secondary.light", fontWeight: 800 }} />
        <Typography variant="h1" sx={{ fontSize: { xs: "2.4rem", md: "4rem" } }}>
          Lawn care services built for repeat business and clean presentation.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85 }}>
          Task Force Lawn Care keeps the offer clear: dependable mowing, cleaner edges,
          seasonal cleanup support, and recurring property maintenance for South Coast
          Massachusetts customers.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
          gap: 2.5,
        }}
      >
        {coreServices.map((service) => (
          <Card key={service.title}>
            <CardContent sx={{ p: 3.5 }}>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 999,
                    bgcolor: "rgba(53,95,24,0.1)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <BuildCircleOutlinedIcon color="primary" />
                </Box>
                <Typography variant="h4" sx={{ fontSize: { xs: "1.4rem", md: "1.6rem" } }}>
                  {service.title}
                </Typography>
              </Stack>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85, mb: 2 }}>
                {service.summary}
              </Typography>
              <Stack spacing={1.25}>
                {service.details.map((detail) => (
                  <Typography key={detail} variant="body2" color="text.secondary">
                    • {detail}
                  </Typography>
                ))}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Card sx={{ mt: 4, background: "linear-gradient(180deg, #fffdf8, #f0f5e8)" }}>
        <CardContent
          sx={{
            p: 3.5,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 2,
          }}
        >
          <Box sx={{ maxWidth: 720 }}>
            <Typography variant="h4" sx={{ mb: 1 }}>
              Need recurring service or a one-time cleanup quote?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Call to discuss the property, frequency, and what kind of maintenance plan
              makes sense for the location.
            </Typography>
          </Box>
          <Button href={phoneHref} variant="contained" size="large">
            Call {phoneDisplay}
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ServicesPage;
