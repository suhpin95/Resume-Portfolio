import { useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { useLocation } from 'react-router';
import user from '../../../data/userOptions';
import BtnToggleTheme from '../../BtnToggleTheme/BtnToggleTheme';
import Logo from '../../Logo/Logo';
import Burger from '../Burger/Burger';
import NavLinks from '../NavLinks/NavLinks';
import SideDrawer from '../SideDrawer/SideDrawer';
import s from './MainNavigation.module.scss';

const MainNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  // biome-ignore lint/correctness/useExhaustiveDependencies: close the drawer whenever the route changes
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location.pathname]);

  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => setIsDrawerOpen((open) => !open);

  return (
    <div className={s.navigation}>
      <Logo className={s.logo} />

      <nav className={s.desktop} aria-label="Primary navigation">
        <NavLinks />
      </nav>

      <div className={s.actions}>
        <BtnToggleTheme />
        <a
          className={s.github}
          href={user.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
        >
          <AiFillGithub />
        </a>
        <Burger onClick={toggleDrawer} open={isDrawerOpen} controls="mobile-navigation" />
      </div>

      <SideDrawer show={isDrawerOpen} onClose={closeDrawer} id="mobile-navigation">
        <nav className={s.drawerNav} aria-label="Mobile navigation">
          <NavLinks onNavigate={closeDrawer} />
        </nav>

        <div className={s.drawerFooter}>
          <a className={s.drawerLink} href={user.github} target="_blank" rel="noreferrer">
            <AiFillGithub aria-hidden="true" />
            GitHub
          </a>
          <a
            className={s.drawerLink}
            href={user.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <p className={s.drawerLocation}>Santa Clara, California</p>
        </div>
      </SideDrawer>
    </div>
  );
};

export default MainNavigation;
