import s from './Preloader.module.scss';

const Preloader = () => {
  return (
    <div className={s.preloader} role="status" aria-label="Loading page">
      <span className={s.mark} aria-hidden="true">
        SP
      </span>
      <span className={s.line} aria-hidden="true" />
      <span className={s.text}>Loading</span>
    </div>
  );
};

export default Preloader;
