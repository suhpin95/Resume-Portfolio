import {
  FiActivity,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiShield,
} from 'react-icons/fi';
import skills from '../../../data/skills';
import s from './TechSkills.module.scss';

const groupIcons = {
  Languages: FiCode,
  'Distributed systems': FiGitBranch,
  'AI platform': FiCpu,
  'Identity & security': FiShield,
  Data: FiDatabase,
  'Cloud & platform': FiCloud,
  Observability: FiActivity,
};

const TechSkills = () => (
  <div className={s.container}>
    {skills.map((group) => {
      const Icon = groupIcons[group.group];

      return (
        <article className={s.group} key={group.group}>
          <h3>
            <span className={s.icon} aria-hidden="true">
              <Icon />
            </span>
            {group.group}
          </h3>
          <ul>
            {group.items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>
      );
    })}
  </div>
);

export default TechSkills;
