import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import GitHubRepositories from '../../components/GitHubRepositories/GitHubRepositories';
import Modal from '../../components/Modal/Modal';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Reveal from '../../components/UIElements/Reveal/Reveal';
import {
  filterProjectsByCategory,
  getProjectById,
  projectCategories,
} from '../../data/projects';
import RootLayout from '../../layouts/RootLayout/RootLayout';
import s from './Projects.module.scss';

const Projects = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [category, setCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const filteredProjects = filterProjectsByCategory(category);

  useEffect(() => {
    setSelectedProject(hash ? getProjectById(hash.slice(1)) : null);
  }, [hash]);

  const closeModal = useCallback(() => {
    navigate('/work', { replace: true });
  }, [navigate]);

  return (
    <RootLayout
      title="Selected Work - Suhas Pindiproli"
      description="Distributed systems, identity platforms, observability, and AI infrastructure case studies by Suhas Pindiproli."
    >
      <section className={`section ${s.section}`} aria-labelledby="work-title">
        <div className="container">
          <SectionHeading
            index="Work"
            eyebrow="Selected projects"
            title={<span id="work-title">Systems, tradeoffs, outcomes.</span>}
            description="Platform work and open-source projects described by the problem, the approach, and what changed in production."
          />

          <fieldset className={s.filters}>
            <legend className="sr-only">Filter projects by category</legend>
            {projectCategories.map((item) => (
              <button
                key={item}
                type="button"
                className={category === item ? s.activeFilter : s.filter}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </fieldset>

          <ul className={s.grid}>
            {filteredProjects.map((project, index) => (
              <li key={project.id}>
                <Reveal delay={index * 70} className={s.cardWrap}>
                  <ProjectCard project={project} index={index} />
                </Reveal>
              </li>
            ))}
          </ul>

          <GitHubRepositories />
        </div>
      </section>

      <Modal
        show={Boolean(selectedProject)}
        onClose={closeModal}
        labelledBy={selectedProject ? `case-study-${selectedProject.id}` : undefined}
      >
        {selectedProject && (
          <article className={s.caseStudy}>
            <p className="eyebrow">
              {selectedProject.category} · {selectedProject.year}
            </p>
            <h2 id={`case-study-${selectedProject.id}`}>{selectedProject.title}</h2>
            <p className={s.caseSummary}>{selectedProject.description}</p>

            <section aria-labelledby="case-problem">
              <h3 id="case-problem">The problem</h3>
              <p>{selectedProject.problem}</p>
            </section>
            <section aria-labelledby="case-approach">
              <h3 id="case-approach">Approach</h3>
              <ul>
                {selectedProject.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="case-tradeoffs">
              <h3 id="case-tradeoffs">Tradeoffs</h3>
              <ul>
                {selectedProject.tradeoffs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="case-impact">
              <h3 id="case-impact">Impact</h3>
              <ul className={s.caseImpact}>
                {selectedProject.impact.map((item) => (
                  <li key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </section>
            <p className={s.technologies}>
              <strong>Technologies:</strong> {selectedProject.technologies.join(' · ')}
            </p>
            {selectedProject.links.repo && (
              <a
                className={`link-underline ${s.repoLink}`}
                href={selectedProject.links.repo}
                target="_blank"
                rel="noreferrer"
              >
                View source on GitHub <span aria-hidden="true">↗</span>
              </a>
            )}
          </article>
        )}
      </Modal>
    </RootLayout>
  );
};

export default Projects;
