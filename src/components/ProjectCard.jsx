export default function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
}) {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="project-link">
        View Project
      </a>
    </div>
  );
}
