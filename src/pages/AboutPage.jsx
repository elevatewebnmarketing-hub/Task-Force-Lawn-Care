import { Box, Card, CardContent, CardMedia, Chip, Container, Stack, Typography } from "@mui/material";
import { aboutBullets } from "../siteData";

function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
      <Stack spacing={1.5} sx={{ mb: 4.5, maxWidth: 860 }}>
        <Chip label="About" sx={{ width: "fit-content", bgcolor: "secondary.light", fontWeight: 700 }} />
        <Typography variant="h1" sx={{ fontSize: { xs: "2.25rem", md: "3.75rem" } }}>
          A dependable local lawn care company serving the South Coast.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85 }}>
          Task Force Lawn Care is positioned around the work local property owners hire
          most often: mowing, edging, trimming, seasonal cleanup, and recurring property maintenance.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
          gap: 2.5,
          alignItems: "stretch",
        }}
      >
        <Card>
          <CardContent sx={{ p: 3.5 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              What the company focuses on
            </Typography>
            <Stack spacing={2}>
              {aboutBullets.map((item) => (
                <Stack key={item} direction="row" spacing={1.25} alignItems="flex-start">
                  <Box sx={{ width: 10, height: 10, borderRadius: 999, bgcolor: "secondary.main", mt: 1 }} />
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ overflow: "hidden" }}>
          <CardMedia
            component="img"
            image="/images/grass-texture-detail.png"
            alt="Close detail of healthy trimmed lawn grass"
            sx={{ minHeight: { xs: 260, md: 100 }, height: "100%", objectFit: "cover" }}
          />
        </Card>
      </Box>
    </Container>
  );
}

export default AboutPage;
