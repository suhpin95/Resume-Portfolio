import s from './Burger.module.scss';

const Burger = ({ onClick, open = false, controls }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${s.burger} ${open ? s.open : ''}`.trim()}
      aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={open}
      aria-controls={controls}
    >
      <span />
      <span />
      <span />
    </button>
  );
};

export default Burger;
