import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { email, phoneDisplay, phoneHref, serviceArea } from "../siteData";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function NavItems({ mobile = false, onClick }) {
  return (
    <Stack
      direction={mobile ? "column" : "row"}
      spacing={mobile ? 1 : 0.5}
      alignItems={mobile ? "stretch" : "center"}
    >
      {navItems.map((item) => (
        <Button
          key={item.to}
          component={NavLink}
          to={item.to}
          onClick={onClick}
          variant="text"
          color="inherit"
          end={item.to === "/"}
          sx={{
            justifyContent: mobile ? "flex-start" : "center",
            color: "text.secondary",
            px: 2,
            "&.active": {
              bgcolor: "rgba(53,95,24,0.08)",
              color: "primary.dark",
            },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Stack>
  );
}

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ bgcolor: "background.default" }}>
      <Box sx={{ bgcolor: "primary.dark", color: "rgba(255,255,255,0.92)", py: 1 }}>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap",
            fontSize: 14,
          }}
        >
          <Typography variant="body2">South Coast Massachusetts Lawn Care</Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 0.5, sm: 2 }}>
            <Link href={phoneHref} color="inherit" underline="none">
              {phoneDisplay}
            </Link>
            <Link href={`mailto:${email}`} color="inherit" underline="none">
              {email}
            </Link>
          </Stack>
        </Container>
      </Box>

      <AppBar position="sticky" color="inherit">
        <Container maxWidth="xl">
          <Toolbar sx={{ px: { xs: 0, md: 0 }, py: 1.25, gap: 2 }}>
            <Stack
              component={NavLink}
              to="/"
              direction="row"
              spacing={1.75}
              sx={{ color: "inherit", textDecoration: "none", alignItems: "center", flexGrow: 1 }}
            >
              <Box
                component="img"
                src="/images/task-force-logo.jpg"
                alt="Task Force Lawn Care logo"
                sx={{
                  width: { xs: 62, md: 74 },
                  height: { xs: 62, md: 74 },
                  borderRadius: 3,
                  border: "1px solid rgba(29,59,20,0.08)",
                  bgcolor: "white",
                }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontFamily: '"Syne", sans-serif', fontWeight: 800 }}>
                  Task Force Lawn Care
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Your Lawn. Our Mission.
                </Typography>
              </Box>
            </Stack>

            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <NavItems />
            </Box>

            <Button
              href={phoneHref}
              variant="contained"
              color="primary"
              sx={{ display: { xs: "none", md: "inline-flex" } }}
            >
              Request Quote
            </Button>

            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{ display: { xs: "inline-flex", lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 290, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontFamily: '"Syne", sans-serif' }}>
            Task Force Lawn Care
          </Typography>
          <NavItems mobile onClick={() => setMobileOpen(false)} />
          <Divider sx={{ my: 2 }} />
          <Stack spacing={1.5}>
            <Button href={phoneHref} variant="contained">
              Call {phoneDisplay}
            </Button>
            <Button href={`mailto:${email}`} variant="outlined" color="primary">
              Email Us
            </Button>
          </Stack>
        </Box>
      </Drawer>

      <Outlet />

      <Box
        component="footer"
        sx={{
          mt: 6,
          pt: 7,
          pb: 5,
          bgcolor: "primary.dark",
          color: "rgba(255,255,255,0.92)",
          borderTopLeftRadius: { xs: 4, md: 6 },
          borderTopRightRadius: { xs: 4, md: 6 },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr 1fr 1fr" },
            gap: 4,
          }}
        >
          <Box>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <Box
                component="img"
                src="/images/task-force-logo.jpg"
                alt="Task Force Lawn Care logo"
                sx={{ width: 68, height: 68, borderRadius: 3, bgcolor: "white" }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontFamily: '"Syne", sans-serif' }}>
                  Task Force Lawn Care, LLC
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.72)" }}>
                  Professional lawn care for South Coast Massachusetts properties.
                </Typography>
              </Box>
            </Stack>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.8 }}>
              Built around mowing, trimming, edging, seasonal cleanups, and dependable
              ongoing maintenance for residential and small commercial clients.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: 1.5, fontFamily: '"Syne", sans-serif' }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  component={NavLink}
                  to={item.to}
                  color="inherit"
                  underline="hover"
                  end={item.to === "/"}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: 1.5, fontFamily: '"Syne", sans-serif' }}>
              Service Area
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {serviceArea.map((town) => (
                <Box
                  key={town}
                  sx={{
                    px: 1.5,
                    py: 0.75,
                    borderRadius: 999,
                    bgcolor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontSize: 14,
                  }}
                >
                  {town}, MA
                </Box>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: 1.5, fontFamily: '"Syne", sans-serif' }}>
              Contact
            </Typography>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocalPhoneOutlinedIcon fontSize="small" />
                <Link href={phoneHref} color="inherit" underline="hover">
                  {phoneDisplay}
                </Link>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailOutlinedIcon fontSize="small" />
                <Link href={`mailto:${email}`} color="inherit" underline="hover">
                  {email}
                </Link>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <LocationOnOutlinedIcon fontSize="small" sx={{ mt: 0.2 }} />
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.72)" }}>
                  Wareham, Massachusetts 02538
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Layout;
