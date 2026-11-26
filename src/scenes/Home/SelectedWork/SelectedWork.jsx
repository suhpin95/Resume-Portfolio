import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router';
import ProjectCard from '../../../components/ProjectCard/ProjectCard';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import Reveal from '../../../components/UIElements/Reveal/Reveal';
import { featuredProjects } from '../../../data/projects';
import s from './SelectedWork.module.scss';

const SelectedWork = () => {
  return (
    <section className={`section ${s.section}`} aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title={<span id="work-title">Case studies in reliability.</span>}
          description="Platform work described by the problem, the tradeoffs, and what changed in production."
          action={
            <Link to="/work" className={s.allLink}>
              All work
              <FiArrowRight aria-hidden="true" />
            </Link>
          }
        />

        <ul className={s.grid}>
          {featuredProjects.map((project, index) => (
            <li key={project.id}>
              <Reveal delay={index * 80} className={s.cardWrap}>
                <ProjectCard project={project} index={index} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SelectedWork;
