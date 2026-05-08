const services = [
  {
    title: "Precision Mowing",
    text: "Clean cuts, consistent striping, and dependable weekly or biweekly upkeep that keeps your lawn sharp from curb to fence line.",
  },
  {
    title: "Trimming + Edging",
    text: "Crisp borders around beds, walkways, and hardscapes so the entire property feels intentional rather than just cut.",
  },
  {
    title: "Seasonal Cleanups",
    text: "Spring resets and fall cleanups that clear debris fast and leave the property ready for the next stretch of the season.",
  },
  {
    title: "Ongoing Maintenance",
    text: "Residential and small commercial property care with a straightforward, responsive service experience.",
  },
];

const towns = [
  "Wareham",
  "Dartmouth",
  "Fairhaven",
  "Plymouth",
  "Mattapoisett",
  "Acushnet",
  "Rochester",
  "New Bedford",
];

const reasons = [
  "Built for South Coast properties, from coastal neighborhoods to inland residential lots.",
  "Focused service mix that matches the brand's current offer: mowing, trimming, edging, cleanups, and maintenance.",
  "Direct booking path by phone, email, or Instagram DM with no clutter and no unnecessary steps.",
];

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Task Force Lawn Care home">
          <span className="brand-badge brand-badge-logo">
            <img src="/images/task-force-logo.jpg" alt="Task Force Lawn Care logo" />
          </span>
          <span>
            <strong>Task Force Lawn Care</strong>
            <em>Your Lawn. Our Mission.</em>
          </span>
        </a>
        <nav className="site-nav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#service-area">Service Area</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">South Coast Massachusetts Lawn Care</p>
            <h1>Reliable lawn care that makes the whole property look handled.</h1>
            <div className="hero-logo-panel">
              <img src="/images/task-force-logo.jpg" alt="Task Force Lawn Care shield logo" />
            </div>
            <p className="hero-text">
              Task Force Lawn Care, LLC serves homeowners and small commercial clients
              across the South Coast with precision mowing, trimming, edging, seasonal
              cleanups, and ongoing property maintenance.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+15088173331">
                Call 508-817-3331
              </a>
              <a className="button button-secondary" href="mailto:taskforcelawncare508@gmail.com">
                Request a Quote
              </a>
            </div>
            <ul className="hero-points" aria-label="Highlights">
              <li>Residential + small commercial</li>
              <li>Fast quote requests by phone, email, or DM</li>
              <li>Serving Wareham and surrounding South Coast towns</li>
            </ul>
          </div>

          <div className="hero-visual">
            <div className="visual-card visual-card-main">
              <img
                src="/images/lawn-crew-hero.png"
                alt="Freshly striped lawn in front of a coastal Massachusetts style home"
              />
            </div>
            <div className="visual-card visual-card-note">
              <span>Mission-ready curb appeal</span>
              <strong>Clean lines. Consistent care.</strong>
            </div>
            <div className="visual-orbit">
              <img src="/images/grass-texture-detail.png" alt="Detailed close-up of trimmed green lawn" />
            </div>
          </div>
        </section>

        <section className="stats-strip" aria-label="Business details">
          <article>
            <strong>South Coast MA</strong>
            <span>Based in Wareham and serving nearby towns</span>
          </article>
          <article>
            <strong>9 core posts</strong>
            <span>Active social presence with direct-message quote flow</span>
          </article>
          <article>
            <strong>1 direct number</strong>
            <span>508-817-3331 for fast quotes and scheduling</span>
          </article>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Everything on the page is tuned for leads, not filler.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section feature-band">
          <div className="feature-image-frame">
            <img
              src="/images/suburban-yard-cleanup.png"
              alt="Professional lawn maintenance crew working on a tidy suburban yard"
            />
          </div>
          <div className="feature-copy">
            <p className="eyebrow">Why It Fits The Market</p>
            <h2>Built for the kind of properties common across Wareham and the South Coast.</h2>
            <p>
              Wareham is a coastal Southeastern Massachusetts community, and local
              properties deal with seasonal growth swings, debris, and presentation needs
              that reward consistent maintenance. The page positions Task Force Lawn Care
              as a dependable operator for that exact environment.
            </p>
            <div className="reason-list">
              {reasons.map((reason) => (
                <div className="reason-item" key={reason}>
                  <span />
                  <p>{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section service-area" id="service-area">
          <div className="section-heading">
            <p className="eyebrow">Service Area</p>
            <h2>Serving homeowners and small businesses across the South Coast.</h2>
            <p>
              Current messaging is focused on Wareham plus the surrounding towns already
              listed in the business profile. That keeps the offer specific and locally credible.
            </p>
          </div>
          <div className="town-grid">
            {towns.map((town) => (
              <span key={town}>{town}, MA</span>
            ))}
          </div>
        </section>

        <section className="section care-note">
          <div>
            <p className="eyebrow">Seasonal Relevance</p>
            <h2>Massachusetts lawns reward consistent mowing height and timely seasonal care.</h2>
          </div>
          <p>
            That matters in New England, where cool-season turf can thin out under summer
            stress and become more vulnerable to weed pressure. The copy on this page leans
            into dependable upkeep and seasonal cleanup because that is directly relevant to
            local lawn performance and appearance.
          </p>
        </section>

        <section className="section contact-panel" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>Get a quote without chasing anyone down.</h2>
            <p>
              Call, email, or message on Instagram to get pricing for recurring service,
              seasonal cleanup, or ongoing maintenance.
            </p>
          </div>
          <div className="contact-card">
            <a href="tel:+15088173331">508-817-3331</a>
            <a href="mailto:taskforcelawncare508@gmail.com">taskforcelawncare508@gmail.com</a>
            <p>Wareham, Massachusetts 02538</p>
            <a
              className="button button-primary"
              href="https://www.instagram.com/taskforcelawncarellc/"
              target="_blank"
              rel="noreferrer"
            >
              Open Instagram
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
