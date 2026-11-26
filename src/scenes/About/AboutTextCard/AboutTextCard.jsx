import { ImPointRight } from 'react-icons/im';
import s from './AboutTextCard.module.scss';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am <span className={s.purple}>Suhas Pindiproli </span>
        from <span className={s.purple}> Santa Clara, CA.</span>
        <br />
        Senior backend engineer specializing in distributed systems and AI platforms{' '}
        <br />
        in Java and Go.
        <br />
        <br />I hold a Bachelor's degree in Computer Science from Savitribai Phule Pune
        University, India.
        <br />I also hold a Master's degree in Computer Science from San Diego State
        University.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Soccer
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
