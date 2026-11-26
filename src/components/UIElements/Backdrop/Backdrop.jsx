import s from './Backdrop.module.scss';

const Backdrop = ({ onClick }) => {
  return (
    <div
      className={s.backdrop}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === 'Escape') onClick?.();
      }}
      role="presentation"
    />
  );
};

export default Backdrop;
