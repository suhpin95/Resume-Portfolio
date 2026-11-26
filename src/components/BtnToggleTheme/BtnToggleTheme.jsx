import { FiMoon, FiSun } from 'react-icons/fi';
import { useThemeContext } from '../../hooks/themeHook/themeHook';
import s from './BtnToggleTheme.module.scss';

const BtnToggleTheme = ({ className = '' }) => {
  const { dark, toggleTheme } = useThemeContext();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`${s.toggle} ${className}`.trim()}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {dark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
    </button>
  );
};

export default BtnToggleTheme;
