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
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <DiPostgresql />
      </li>
      <li className={s.techIcon}>
        <DiPython />
      </li>
      <li className={s.techIcon}>
        <DiJava />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <SiDjango />
      </li>
      <li className={s.techIcon}>
        <SiSpring />
      </li>
      <li className={s.techIcon}>
        <SiAmazonaws />
      </li>
      <li className={s.techIcon}>
        <DiJenkins />
      </li>
      <li className={s.techIcon}>
        <DiJira />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
    </ul>
  );
};

export default TechSkills;
