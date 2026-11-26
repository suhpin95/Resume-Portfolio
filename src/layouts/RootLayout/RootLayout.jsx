import { useEffect } from 'react';
import { useLocation } from 'react-router';
import s from './RootLayout.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

const RootLayout = ({ children }) => {
  return (
    <div className={s.layout}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />

      <div className={s.backdrop} aria-hidden="true" />

      <Header />

      <main id="main" className={s.main}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
