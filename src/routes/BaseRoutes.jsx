import { lazy } from 'react';
import { Route, Routes } from 'react-router';

//scenes
const Home = lazy(() => import('../scenes/Home/Home'));
const About = lazy(() => import('../scenes/About/About'));
const Resume = lazy(() => import('../scenes/Resume/Resume'));
const Work = lazy(() => import('../scenes/Projects/Projects'));

export const routes = {
  HOME: '/',
  WORK: '/work',
  ABOUT: '/about',
  RESUME: '/resume',
};

const BaseRoutes = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.WORK} element={<Work />} />
      <Route path={routes.ABOUT} element={<About />} />
      <Route path={routes.RESUME} element={<Resume />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default BaseRoutes;
