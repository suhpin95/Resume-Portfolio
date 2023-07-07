import s from './TechSkills.module.scss';
import {
  DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit,DiPython, DiJava, DiJenkins, DiJira, DiPostgresql, DiCss3,
} from 'react-icons/di';
import {
  SiRedux,
  SiAmazonaws, SiDjango, SiSpring,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <section className={s.container}>
      <a href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'} className={s.techIcon} target = {"_blank"} >
        <DiJavascript1  />
      </a>
      <a href={'https://developer.mozilla.org/en-US/docs/Web/CSS'} className={s.techIcon} target = {"_blank"} >
        <DiCss3 />
      </a>
      <a href={'https://react.dev/'} className={s.techIcon} target = {"_blank"}>
        <DiReact />
      </a>
      <a href={'https://redux.js.org/'} className={s.techIcon} target = {"_blank"}>
        <SiRedux />
      </a>
      <a href={'https://www.mongodb.com/docs/'} className={s.techIcon} target = {"_blank"}>
        <DiMongodb />
      </a>
      <a href={'https://www.postgresql.org/docs/'} className={s.techIcon} target = {"_blank"}>
        <DiPostgresql />
      </a>
      <a href={'https://www.python.org/doc/'} className={s.techIcon} target = {"_blank"}>
        <DiPython />
      </a>
      <a href={'https://docs.oracle.com/en/java/'} className={s.techIcon} target = {"_blank"}>
        <DiJava />
      </a>
      <a href={'https://nodejs.org/en/docs'} className={s.techIcon} target = {"_blank"}>
        <DiNodejs />
      </a>
      <a href={'https://docs.djangoproject.com/en/4.2/'} className={s.techIcon} target = {"_blank"}>
        <SiDjango />
      </a>
      <a href={'https://docs.spring.io/spring-framework/reference/'} className={s.techIcon} target = {"_blank"}>
        <SiSpring />
      </a>
      <a href={'https://docs.aws.amazon.com/'} className={s.techIcon} target = {"_blank"} >
        <SiAmazonaws />
      </a>
      <a href={'https://www.jenkins.io/doc/'} className={s.techIcon} target = {"_blank"} >
        <DiJenkins />
      </a>
      <a href={'https://www.atlassian.com/software/jira'} className={s.techIcon} target = {"_blank"} >
        <DiJira />
      </a>
      <a href={'https://docs.github.com/en'} className={s.techIcon} target={"_blank"}>
        <DiGit />
      </a>
    </section>
  );
};

export default TechSkills;
