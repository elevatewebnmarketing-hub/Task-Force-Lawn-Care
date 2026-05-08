import { Link } from "react-router-dom";
import {
  coreServices,
  processSteps,
  reasonsToChoose,
  serviceArea,
  phoneDisplay,
  phoneHref,
} from "../siteData";

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Reliable Residential And Small Commercial Lawn Care</p>
            <h1>Traditional lawn care service, presented like a real local business.</h1>
            <p className="lead">
              Task Force Lawn Care, LLC helps South Coast Massachusetts property owners
              keep lawns sharp with routine mowing, trimming, edging, seasonal cleanups,
              and ongoing property maintenance.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={phoneHref}>
                Call {phoneDisplay}
              </a>
              <Link className="button button-secondary" to="/services">
                View Services
              </Link>
            </div>
            <div className="trust-grid">
              <article>
                <strong>Service Area</strong>
                <span>Wareham and surrounding South Coast towns</span>
              </article>
              <article>
                <strong>Core Focus</strong>
                <span>Mowing, edging, trimming, cleanups, maintenance</span>
              </article>
              <article>
                <strong>Contact Path</strong>
                <span>Simple phone and email quote requests</span>
              </article>
            </div>
          </div>

          <div className="hero-media">
            <img
              src="/images/lawn-crew-hero.png"
              alt="Striped lawn outside a coastal Massachusetts home"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Core Services</p>
            <h2>Focused service offerings that are easy to understand and easy to book.</h2>
          </div>
          <div className="card-grid four-up">
            {coreServices.map((service) => (
              <article className="info-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ul className="clean-list">
                  {service.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split-section">
          <div className="split-media">
            <img
              src="/images/suburban-yard-cleanup.png"
              alt="Well maintained yard with edging and cleanup work"
            />
          </div>
          <div className="split-content">
            <p className="eyebrow">Why This Works Better</p>
            <h2>A cleaner structure, more detail, and a more standard contractor-site layout.</h2>
            <p>
              The site now emphasizes business credibility instead of social metrics. That
              means clearer navigation, deeper service descriptions, dedicated project
              examples, and multiple pages that make the company feel more established.
            </p>
            <div className="check-list">
              {reasonsToChoose.map((reason) => (
                <div className="check-item" key={reason}>
                  <span />
                  <p>{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">How It Works</p>
            <h2>A straightforward quote-to-service process.</h2>
          </div>
          <div className="card-grid three-up">
            {processSteps.map((item) => (
              <article className="step-card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Service Area</p>
            <h2>Serving Wareham and nearby South Coast communities.</h2>
          </div>
          <div className="town-chip-grid">
            {serviceArea.map((town) => (
              <span key={town}>{town}, MA</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
