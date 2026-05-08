import { coreServices, phoneDisplay, phoneHref } from "../siteData";

function ServicesPage() {
  return (
    <div className="container interior-page">
      <section className="page-intro">
        <p className="eyebrow">Services</p>
        <h1>Lawn care services built for repeat business and clean presentation.</h1>
        <p className="lead">
          Task Force Lawn Care keeps the offer clear: dependable mowing, cleaner edges,
          seasonal cleanup support, and recurring property maintenance for South Coast
          Massachusetts customers.
        </p>
      </section>

      <section className="card-grid two-up">
        {coreServices.map((service) => (
          <article className="service-detail-card" key={service.title}>
            <h2>{service.title}</h2>
            <p>{service.summary}</p>
            <ul className="clean-list">
              {service.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="cta-band">
        <div>
          <h2>Need recurring service or a one-time cleanup quote?</h2>
          <p>
            Call to discuss the property, frequency, and what kind of maintenance plan
            makes sense for the location.
          </p>
        </div>
        <a className="button button-primary" href={phoneHref}>
          Call {phoneDisplay}
        </a>
      </section>
    </div>
  );
}

export default ServicesPage;
