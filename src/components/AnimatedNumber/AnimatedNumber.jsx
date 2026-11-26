import { useCountUp } from '../../hooks/useCountUp';
import { useReveal } from '../../hooks/useReveal';
import s from './AnimatedNumber.module.scss';

const AnimatedNumber = ({ value, suffix = '', decimals = 0 }) => {
  const { ref, visible } = useReveal({ threshold: 0.4 });
  const current = useCountUp(value, { start: visible });

  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(current);

  return (
    <span ref={ref} className={s.number}>
      {formatted}
      {suffix}
    </span>
  );
};

export default AnimatedNumber;
