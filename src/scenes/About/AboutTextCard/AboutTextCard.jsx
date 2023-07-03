import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Suhas Pindiproli </span>
        from <span className={s.purple}> San Diego, CA.</span>
        <br />
        Software engineer with expertise in full stack development{' '}
        <br />
        using React.
        <br />
        <br />
        I have a Bachelor's degree in Computer Engineering from Savitribai phule Pune university, India
        <br />
        Master's degree in Computer Science from San Diego State University.
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
