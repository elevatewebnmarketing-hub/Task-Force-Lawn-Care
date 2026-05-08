import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { projectHighlights } from "../siteData";

function ProjectsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 }, px: { xs: 2, sm: 3 } }}>
      <Stack spacing={1.5} sx={{ mb: 4.5, maxWidth: 860, minWidth: 0 }}>
        <Chip label="Projects" sx={{ width: { xs: "100%", sm: "fit-content" }, bgcolor: "secondary.light", fontWeight: 700 }} />
        <Typography variant="h1" sx={{ fontSize: { xs: "2rem", sm: "2.25rem", md: "3.75rem" } }}>
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
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
          gap: 2.5,
        }}
      >
        {projectHighlights.map((project) => (
          <Card key={project.title} sx={{ overflow: "hidden", minWidth: 0 }}>
            <CardMedia
              component="img"
              image={project.image}
              alt={project.title}
              sx={{ height: { xs: 220, sm: 260 }, objectFit: "cover" }}
            />
            <CardContent sx={{ p: { xs: 2.25, sm: 3 } }}>
              <Chip
                label={project.location}
                size="small"
                sx={{ mb: 2, bgcolor: "rgba(53,95,24,0.08)", color: "primary.dark", fontWeight: 700, maxWidth: "100%" }}
              />
              <Typography variant="h4" sx={{ mb: 1.25, fontSize: { xs: "1.12rem", sm: "1.4rem" } }}>
                {project.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                {project.description}
              </Typography>
              <Typography variant="body2" sx={{ color: "primary.dark", fontWeight: 700 }}>
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
