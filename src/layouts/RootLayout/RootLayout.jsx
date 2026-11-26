import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import s from './RootLayout.module.scss';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll on route or hash change
  useEffect(() => {
    if (hash) {
      const frame = requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ block: 'start' });
      });

      return () => cancelAnimationFrame(frame);
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
    return undefined;
  }, [pathname, hash]);

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
