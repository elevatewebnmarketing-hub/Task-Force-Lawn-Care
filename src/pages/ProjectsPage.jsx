import { projectHighlights } from "../siteData";

function ProjectsPage() {
  return (
    <div className="container interior-page">
      <section className="page-intro">
        <p className="eyebrow">Projects</p>
        <h1>Representative property care projects and presentation-focused lawn work.</h1>
        <p className="lead">
          These project highlights show the type of work the site is designed to attract:
          regular maintenance, cleaner borders, stronger curb appeal, and dependable upkeep.
        </p>
      </section>

      <section className="project-grid">
        {projectHighlights.map((project) => (
          <article className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} />
            <div className="project-card-body">
              <p className="project-location">{project.location}</p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <strong>{project.scope}</strong>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default ProjectsPage;
