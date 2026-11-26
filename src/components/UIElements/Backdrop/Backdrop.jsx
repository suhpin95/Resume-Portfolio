import s from './Backdrop.module.scss';

const Backdrop = ({ onClick }) => {
  return (
    <button
      type="button"
      className={s.backdrop}
      onClick={onClick}
      aria-label="Close overlay"
      tabIndex={-1}
    />
  );
};

export default Backdrop;
