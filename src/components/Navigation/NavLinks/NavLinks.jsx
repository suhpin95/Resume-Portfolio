import { NavLink } from 'react-router';
import s from './NavLinks.module.scss';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/resume', label: 'Resume' },
];

const NavLinks = ({ onNavigate, className = '' }) => {
  return (
    <ul className={`${s.links} ${className}`.trim()}>
      {links.map((link) => (
        <li key={link.to}>
          <NavLink
            to={link.to}
            end={link.end}
            onClick={onNavigate}
            className={({ isActive }) => `${s.link} ${isActive ? s.active : ''}`.trim()}
          >
            <span>{link.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
