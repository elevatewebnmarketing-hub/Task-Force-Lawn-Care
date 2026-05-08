import { aboutBullets } from "../siteData";

function AboutPage() {
  return (
    <div className="container interior-page">
      <section className="page-intro">
        <p className="eyebrow">About</p>
        <h1>A more grounded business presentation for Task Force Lawn Care.</h1>
        <p className="lead">
          This site is now structured like a conventional local-service website, with
          separate pages, a fuller business story, and stronger detail around scope,
          market, and contact paths.
        </p>
      </section>

      <section className="content-band">
        <div className="content-band-copy">
          <h2>What the site now communicates</h2>
          <div className="check-list">
            {aboutBullets.map((item) => (
              <div className="check-item" key={item}>
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="content-band-media">
          <img
            src="/images/grass-texture-detail.png"
            alt="Close detail of healthy trimmed lawn grass"
          />
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
