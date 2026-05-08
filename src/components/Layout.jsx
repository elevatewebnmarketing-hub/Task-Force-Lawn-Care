import { NavLink, Outlet } from "react-router-dom";
import { email, phoneDisplay, phoneHref, serviceArea } from "../siteData";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Layout() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <p>South Coast Massachusetts Lawn Care</p>
          <div className="topbar-links">
            <a href={phoneHref}>{phoneDisplay}</a>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </header>

      <header className="main-header">
        <div className="container header-inner">
          <NavLink className="brand" to="/">
            <img src="/images/task-force-logo.jpg" alt="Task Force Lawn Care logo" />
            <span>
              <strong>Task Force Lawn Care</strong>
              <em>Your Lawn. Our Mission.</em>
            </span>
          </NavLink>

          <nav className="main-nav" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : undefined)}
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <a className="button button-primary header-cta" href={phoneHref}>
            Request Quote
          </a>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/images/task-force-logo.jpg" alt="Task Force Lawn Care logo" />
              <div>
                <strong>Task Force Lawn Care, LLC</strong>
                <p>Professional lawn care for South Coast Massachusetts properties.</p>
              </div>
            </div>
            <p className="footer-copy">
              Built around mowing, trimming, edging, seasonal cleanups, and dependable
              ongoing maintenance for residential and small commercial clients.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <div className="footer-links">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.to === "/"}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <h3>Service Area</h3>
            <div className="footer-towns">
              {serviceArea.map((town) => (
                <span key={town}>{town}, MA</span>
              ))}
            </div>
          </div>

          <div>
            <h3>Contact</h3>
            <div className="footer-links">
              <a href={phoneHref}>{phoneDisplay}</a>
              <a href={`mailto:${email}`}>{email}</a>
              <p>Wareham, Massachusetts 02538</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
