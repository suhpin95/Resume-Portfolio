import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router';
import s from './ProjectCard.module.scss';

const ProjectCard = ({ project, index }) => {
  const href = `/work#${project.id}`;

  return (
    <article className={s.card} id={project.id}>
      <div className={s.top}>
        <span className={s.index}>{String(index + 1).padStart(2, '0')}</span>
        <span className={s.category}>{project.category}</span>
        <span className={s.year}>{project.year}</span>
      </div>

      <h3 className={s.title}>
        <Link to={href}>{project.title}</Link>
      </h3>

      <p className={s.summary}>{project.summary}</p>

      <ul className={s.impact} aria-label="Impact">
        {project.impact.slice(0, 2).map((item) => (
          <li key={item.label}>
            <span className={s.value}>{item.value}</span>
            <span className={s.label}>{item.label}</span>
          </li>
        ))}
      </ul>

      <div className={s.footer}>
        <ul className={s.tags} aria-label="Technologies">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <Link to={href} className={s.arrow} aria-label={`View ${project.title}`}>
          <FiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
