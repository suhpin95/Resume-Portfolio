import s from './TechSkills.module.scss';
import {
  DiNodejs, DiGit, DiPython, DiJava, DiJenkins, DiJira, DiPostgresql,
} from 'react-icons/di';
import {
  SiAmazonaws, SiSpring,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <section className={s.container}>
      <a href={'https://www.postgresql.org/docs/'} className={s.techIcon} target="_blank" rel="noreferrer">
        <DiPostgresql />
      </a>
      <a href={'https://www.python.org/doc/'} className={s.techIcon} target="_blank" rel="noreferrer">
        <DiPython />
      </a>
      <a href={'https://docs.oracle.com/en/java/'} className={s.techIcon} target="_blank" rel="noreferrer">
        <DiJava />
      </a>
      <a href={'https://nodejs.org/en/docs'} className={s.techIcon} target="_blank" rel="noreferrer">
        <DiNodejs />
      </a>
      <a href={'https://docs.spring.io/spring-framework/reference/'} className={s.techIcon} target="_blank" rel="noreferrer">
        <SiSpring />
      </a>
      <a href={'https://docs.aws.amazon.com/'} className={s.techIcon} target="_blank" rel="noreferrer">
        <SiAmazonaws />
      </a>
      <a href={'https://www.jenkins.io/doc/'} className={s.techIcon} target="_blank" rel="noreferrer">
        <DiJenkins />
      </a>
      <a href={'https://www.atlassian.com/software/jira'} className={s.techIcon} target="_blank" rel="noreferrer">
        <DiJira />
      </a>
      <a href={'https://docs.github.com/en'} className={s.techIcon} target="_blank" rel="noreferrer">
        <DiGit />
      </a>
    </section>
  );
};

export default TechSkills;
