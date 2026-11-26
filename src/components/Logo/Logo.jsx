import { Link } from 'react-router';
import s from './Logo.module.scss';

const Logo = ({ className = '' }) => {
  return (
    <Link to="/" className={`${s.logo} ${className}`.trim()}>
      <span className={s.mark} aria-hidden="true">
        SP
      </span>
      <span className={s.name}>
        <span>Suhas</span>
        <span>Pindiproli</span>
      </span>
    </Link>
  );
};

export default Logo;
