import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Reveal from '../../components/UIElements/Reveal/Reveal';
import projects from '../../data/projects';
import RootLayout from '../../layouts/RootLayout/RootLayout';
import s from './Projects.module.scss';

const Projects = () => {
  return (
    <RootLayout>
      <section className={`section ${s.section}`} aria-labelledby="work-title">
        <div className="container">
          <SectionHeading
            index="Work"
            eyebrow="Selected projects"
            title={<span id="work-title">Systems, tradeoffs, outcomes.</span>}
            description="Platform work and open-source projects described by the problem, the approach, and what changed in production."
          />

          <ul className={s.grid}>
            {projects.map((project, index) => (
              <li key={project.id}>
                <Reveal delay={index * 70} className={s.cardWrap}>
                  <ProjectCard project={project} index={index} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </RootLayout>
  );
};

export default Projects;
