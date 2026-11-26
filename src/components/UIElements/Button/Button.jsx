import classNames from 'classnames';
import s from './Button.module.scss';

const Button = ({
  type = 'button',
  onClick,
  disabled,
  className,
  children,
  href,
  target,
  style,
  addClass,
  label,
  variant = 'primary',
}) => {
  const classes = classNames(s.button, s[variant], className, addClass);

  if (href) {
    return (
      <a
        style={style}
        className={classes}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noreferrer' : undefined}
        aria-label={label}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      style={style}
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {children}
    </button>
  );
};

export default Button;
