import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import GrassOutlinedIcon from "@mui/icons-material/GrassOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  coreServices,
  processSteps,
  reasonsToChoose,
  serviceArea,
  phoneDisplay,
  phoneHref,
} from "../siteData";

const icons = [GrassOutlinedIcon, ContentCutOutlinedIcon, ParkOutlinedIcon, HomeWorkOutlinedIcon];

function HomePage() {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(239,224,169,0.24), rgba(255,255,255,0) 42%), linear-gradient(180deg, #fffdf8 0%, #f4f7ef 100%)",
          borderBottom: "1px solid rgba(29,59,20,0.08)",
        }}
      >
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "center",
            }}
          >
            <Box>
              <Chip
                label="Reliable Residential And Small Commercial Lawn Care"
                sx={{ mb: 2, bgcolor: "rgba(53,95,24,0.08)", color: "primary.dark", fontWeight: 800 }}
              />
              <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "4.6rem" }, maxWidth: 760 }}>
                A cleaner, more professional site built on a proper UI system.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 2.5, maxWidth: 720, lineHeight: 1.85 }}>
                Task Force Lawn Care, LLC helps South Coast Massachusetts property owners
                keep lawns sharp with routine mowing, trimming, edging, seasonal cleanups,
                and ongoing property maintenance.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 4 }}>
                <Button href={phoneHref} variant="contained" size="large">
                  Call {phoneDisplay}
                </Button>
                <Button
                  component={Link}
                  to="/services"
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowForwardRoundedIcon />}
                  size="large"
                >
                  View Services
                </Button>
              </Stack>

              <Box
                sx={{
                  mt: 4.5,
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                  gap: 2,
                }}
              >
                {[
                  ["Service Area", "Wareham and surrounding South Coast towns"],
                  ["Core Focus", "Mowing, edging, trimming, cleanups, maintenance"],
                  ["Contact Path", "Simple phone and email quote requests"],
                ].map(([title, text]) => (
                  <Card key={title}>
                    <CardContent sx={{ p: 2.5 }}>
                      <Typography variant="h6" sx={{ fontSize: "1rem", mb: 1 }}>
                        {title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {text}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>

            <Card sx={{ overflow: "hidden", borderRadius: { xs: 4, md: 6 } }}>
              <CardMedia
                component="img"
                image="/images/lawn-crew-hero.png"
                alt="Striped lawn outside a coastal Massachusetts home"
                sx={{ minHeight: { xs: 260, md: 560 }, objectFit: "cover" }}
              />
            </Card>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 9 } }}>
        <Stack spacing={1.5} sx={{ mb: 4 }}>
          <Chip label="Core Services" sx={{ width: "fit-content", bgcolor: "secondary.light", fontWeight: 800 }} />
          <Typography variant="h2" sx={{ maxWidth: 840 }}>
            Focused service offerings that are easy to understand and easy to book.
          </Typography>
        </Stack>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" },
            gap: 2.5,
          }}
        >
          {coreServices.map((service, index) => {
            const Icon = icons[index];
            return (
              <Card key={service.title}>
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 999,
                      bgcolor: "rgba(53,95,24,0.1)",
                      display: "grid",
                      placeItems: "center",
                      mb: 2,
                    }}
                  >
                    <Icon color="primary" />
                  </Box>
                  <Typography variant="h5" sx={{ mb: 1.25, fontSize: "1.3rem" }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                    {service.summary}
                  </Typography>
                  <Stack spacing={1}>
                    {service.details.map((detail) => (
                      <Stack
                        key={detail}
                        direction="row"
                        spacing={1}
                        alignItems="flex-start"
                      >
                        <AssignmentTurnedInOutlinedIcon color="secondary" fontSize="small" sx={{ mt: 0.2 }} />
                        <Typography variant="body2" color="text.secondary">
                          {detail}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>

      <Box sx={{ bgcolor: "#f2f6ec", borderTop: "1px solid rgba(29,59,20,0.08)", borderBottom: "1px solid rgba(29,59,20,0.08)" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 9 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "0.96fr 1.04fr" },
              gap: { xs: 4, md: 4 },
              alignItems: "center",
            }}
          >
            <Card sx={{ overflow: "hidden", borderRadius: { xs: 4, md: 6 } }}>
              <CardMedia
                component="img"
                image="/images/suburban-yard-cleanup.png"
                alt="Well maintained yard with edging and cleanup work"
                sx={{ minHeight: { xs: 260, md: 420 }, objectFit: "cover" }}
              />
            </Card>
            <Box>
              <Chip label="Why This Works Better" sx={{ mb: 2, bgcolor: "rgba(53,95,24,0.08)", color: "primary.dark", fontWeight: 800 }} />
              <Typography variant="h2" sx={{ mb: 2 }}>
                A stronger visual system with better responsive behavior.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85, mb: 3 }}>
                The site now emphasizes business credibility instead of social metrics. That
                means clearer navigation, deeper service descriptions, dedicated project
                examples, and multiple pages that make the company feel more established.
              </Typography>
              <Stack spacing={1.5}>
                {reasonsToChoose.map((reason) => (
                  <Stack key={reason} direction="row" spacing={1.25} alignItems="flex-start">
                    <Box sx={{ width: 10, height: 10, borderRadius: 999, bgcolor: "secondary.main", mt: 1 }} />
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                      {reason}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 9 } }}>
        <Stack spacing={1.5} sx={{ mb: 4 }}>
          <Chip label="How It Works" sx={{ width: "fit-content", bgcolor: "secondary.light", fontWeight: 800 }} />
          <Typography variant="h2">A straightforward quote-to-service process.</Typography>
        </Stack>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 2.5,
          }}
        >
          {processSteps.map((item) => (
            <Card key={item.step}>
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 999,
                    bgcolor: "primary.dark",
                    color: "white",
                    display: "grid",
                    placeItems: "center",
                    mb: 2,
                    fontFamily: '"Syne", sans-serif',
                    fontWeight: 800,
                  }}
                >
                  {item.step}
                </Box>
                <Typography variant="h5" sx={{ mb: 1, fontSize: "1.35rem" }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      <Box sx={{ bgcolor: "#f2f6ec", borderTop: "1px solid rgba(29,59,20,0.08)", borderBottom: "1px solid rgba(29,59,20,0.08)" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
          <Stack spacing={1.5} sx={{ mb: 3.5 }}>
            <Chip label="Service Area" sx={{ width: "fit-content", bgcolor: "rgba(53,95,24,0.08)", color: "primary.dark", fontWeight: 800 }} />
            <Typography variant="h2">Serving Wareham and nearby South Coast communities.</Typography>
          </Stack>
          <Stack direction="row" spacing={1.25} useFlexGap flexWrap="wrap">
            {serviceArea.map((town) => (
              <Chip key={town} label={`${town}, MA`} variant="outlined" sx={{ bgcolor: "background.paper", px: 0.5, py: 2.2 }} />
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default HomePage;
