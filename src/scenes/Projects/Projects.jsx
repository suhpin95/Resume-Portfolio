import s from './Projects.module.scss';
import projects from '../../data/projects';
import RootLayout from '../../layouts/RootLayout/RootLayout';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <RootLayout>
      <div className={s.content}>
        <h1 className={s.title}>
          My Recent <strong className={s.purple}>Works</strong>
        </h1>
        <p className={s.subtitle}>
          Here are a few projects I've worked on recently.
        </p>

        <ul className={s.projects}>
          {projects.map((props) => (
            <ProjectCard key={props.id} {...props} />
          ))}
        </ul>
      </div>
    </RootLayout>
  );
};

export default Projects;
