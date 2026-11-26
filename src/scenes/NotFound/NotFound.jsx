import { Link } from 'react-router';
import RootLayout from '../../layouts/RootLayout/RootLayout';
import s from './NotFound.module.scss';

const NotFound = () => (
  <RootLayout
    title="Page not found - Suhas Pindiproli"
    description="The page you requested could not be found."
  >
    <section className={`section ${s.section}`} aria-labelledby="not-found-title">
      <div className="container">
        <p className="eyebrow">404 · Route not found</p>
        <h1 id="not-found-title">This page isn't in the system.</h1>
        <p className={s.description}>
          The address may have changed, or the page may no longer be available.
        </p>
        <Link className={s.homeLink} to="/">
          Return to the homepage <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  </RootLayout>
);

export default NotFound;
