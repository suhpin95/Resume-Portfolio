import { useEffect, useState } from 'react';
import classNames from 'classnames';
import s from './Header.module.scss';
import MainNavigation from '../Navigation/MainNavigation/MainNavigation';

const Header = () => {
  const [highlighted, setHighlighted] = useState(false);

  useEffect(() => {
    const onScroll = () => setHighlighted(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={classNames(s.header, {
        [s.highlighted]: highlighted,
      })}
    >
      <div className={s.inner}>
        <MainNavigation />
      </div>
    </header>
  );
};

export default Header;
