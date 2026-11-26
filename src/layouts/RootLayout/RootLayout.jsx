import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import s from './RootLayout.module.scss';

const PageMetadata = ({ title, description }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const previousTitle = document.title;
    const previousValues = [
      ['meta[name="description"]', 'content'],
      ['meta[property="og:title"]', 'content'],
      ['meta[property="og:description"]', 'content'],
      ['meta[property="og:url"]', 'content'],
      ['meta[name="twitter:title"]', 'content'],
      ['meta[name="twitter:description"]', 'content'],
      ['link[rel="canonical"]', 'href'],
    ].map(([selector, attribute]) => {
      const element = document.querySelector(selector);
      return { element, attribute, value: element?.getAttribute(attribute) };
    });

    const pageTitle = title || 'Suhas Pindiproli - Distributed Systems & AI';
    const pageDescription =
      description ||
      'Suhas Pindiproli - senior software engineer building distributed systems and AI platforms.';
    document.title = pageTitle;

    for (const [selector, attribute, value] of [
      ['meta[name="description"]', 'content', pageDescription],
      ['meta[property="og:title"]', 'content', pageTitle],
      ['meta[property="og:description"]', 'content', pageDescription],
      [
        'meta[property="og:url"]',
        'content',
        new URL(pathname, window.location.origin).href,
      ],
      ['meta[name="twitter:title"]', 'content', pageTitle],
      ['meta[name="twitter:description"]', 'content', pageDescription],
      ['link[rel="canonical"]', 'href', new URL(pathname, window.location.origin).href],
    ]) {
      document.querySelector(selector)?.setAttribute(attribute, value);
    }

    return () => {
      document.title = previousTitle;
      for (const { element, attribute, value } of previousValues) {
        if (element && value !== null) element.setAttribute(attribute, value);
      }
    };
  }, [description, pathname, title]);

  return null;
};

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

const RootLayout = ({ children, title, description }) => {
  return (
    <div className={s.layout}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <PageMetadata title={title} description={description} />
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
