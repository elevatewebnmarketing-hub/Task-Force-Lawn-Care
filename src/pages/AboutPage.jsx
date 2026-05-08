import { Box, Card, CardContent, CardMedia, Chip, Container, Stack, Typography } from "@mui/material";
import { aboutBullets } from "../siteData";

function AboutPage() {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
      <Stack spacing={1.5} sx={{ mb: 4.5, maxWidth: 860 }}>
        <Chip label="About" sx={{ width: "fit-content", bgcolor: "secondary.light", fontWeight: 800 }} />
        <Typography variant="h1" sx={{ fontSize: { xs: "2.4rem", md: "4rem" } }}>
          A more grounded business presentation for Task Force Lawn Care.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85 }}>
          This site is now structured like a conventional local-service website, with
          separate pages, a fuller business story, and stronger detail around scope,
          market, and contact paths.
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
              What the site now communicates
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
