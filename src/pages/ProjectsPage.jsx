import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import { projectHighlights } from "../siteData";

function ProjectsPage() {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
      <Stack spacing={1.5} sx={{ mb: 4.5, maxWidth: 860 }}>
        <Chip label="Projects" sx={{ width: "fit-content", bgcolor: "secondary.light", fontWeight: 800 }} />
        <Typography variant="h1" sx={{ fontSize: { xs: "2.4rem", md: "4rem" } }}>
          Representative property care projects and presentation-focused lawn work.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85 }}>
          These project highlights show the type of work the site is designed to attract:
          regular maintenance, cleaner borders, stronger curb appeal, and dependable upkeep.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" },
          gap: 2.5,
        }}
      >
        {projectHighlights.map((project) => (
          <Card key={project.title} sx={{ overflow: "hidden" }}>
            <CardMedia
              component="img"
              image={project.image}
              alt={project.title}
              sx={{ minHeight: 260, objectFit: "cover" }}
            />
            <CardContent sx={{ p: 3 }}>
              <Chip
                label={project.location}
                size="small"
                sx={{ mb: 2, bgcolor: "rgba(53,95,24,0.08)", color: "primary.dark", fontWeight: 700 }}
              />
              <Typography variant="h4" sx={{ mb: 1.25, fontSize: "1.45rem" }}>
                {project.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                {project.description}
              </Typography>
              <Typography variant="body2" sx={{ color: "primary.dark", fontWeight: 800 }}>
                {project.scope}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default ProjectsPage;
