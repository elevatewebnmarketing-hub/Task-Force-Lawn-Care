import { email, phoneDisplay, phoneHref, serviceArea } from "../siteData";

function ContactPage() {
  return (
    <div className="container interior-page">
      <section className="page-intro">
        <p className="eyebrow">Contact</p>
        <h1>Request a quote for mowing, maintenance, or seasonal cleanup.</h1>
        <p className="lead">
          The contact page stays simple: clear service area, direct contact information,
          and no unnecessary steps between a visitor and a quote request.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-panel-standard">
          <h2>Direct Contact</h2>
          <a href={phoneHref}>{phoneDisplay}</a>
          <a href={`mailto:${email}`}>{email}</a>
          <p>Wareham, Massachusetts 02538</p>
          <p>Serving South Coast Massachusetts residential and small commercial properties.</p>
        </div>

        <div className="contact-panel-standard">
          <h2>Areas Served</h2>
          <div className="town-chip-grid compact">
            {serviceArea.map((town) => (
              <span key={town}>{town}, MA</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
