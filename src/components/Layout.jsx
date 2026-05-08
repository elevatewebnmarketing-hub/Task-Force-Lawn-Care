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
    <Box sx={{ bgcolor: "background.default", overflowX: "clip" }}>
      <Box sx={{ bgcolor: "primary.dark", color: "rgba(255,255,255,0.92)", py: 1 }}>
        <Container
          maxWidth="lg"
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
        <Container maxWidth="lg">
          <Toolbar sx={{ px: 0, py: 1.25, gap: 2 }}>
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
                  width: { xs: 56, md: 68 },
                  height: { xs: 56, md: 68 },
                  borderRadius: 2,
                  border: "1px solid rgba(29,59,20,0.08)",
                  bgcolor: "white",
                }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontFamily: '"Bitter", serif', fontWeight: 700 }}>
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
          <Typography variant="h6" sx={{ mb: 2, fontFamily: '"Bitter", serif' }}>
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
          mt: 7,
          pt: 6,
          bgcolor: "primary.dark",
          color: "rgba(255,255,255,0.92)",
          borderTop: "4px solid",
          borderColor: "secondary.main",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1.15fr 0.7fr 0.9fr 0.9fr" },
            gap: { xs: 4, md: 5 },
            pb: 5,
          }}
        >
          <Box>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <Box
                component="img"
                src="/images/task-force-logo.jpg"
                alt="Task Force Lawn Care logo"
                sx={{ width: 60, height: 60, borderRadius: 2, bgcolor: "white" }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontFamily: '"Bitter", serif' }}>
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
            <Typography variant="h6" sx={{ mb: 1.5, fontFamily: '"Bitter", serif' }}>
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
            <Typography variant="h6" sx={{ mb: 1.5, fontFamily: '"Bitter", serif' }}>
              Service Area
            </Typography>
            <Stack spacing={0.8}>
              {serviceArea.map((town) => (
                <Typography
                  key={town}
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.78)" }}
                >
                  {town}, MA
                </Typography>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: 1.5, fontFamily: '"Bitter", serif' }}>
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
        <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <Container
            maxWidth="lg"
            sx={{
              py: 2,
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.66)" }}>
              © 2026 Task Force Lawn Care, LLC. All rights reserved.
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.66)" }}>
              Lawn care services for South Coast Massachusetts
            </Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
