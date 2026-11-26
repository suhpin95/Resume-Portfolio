import { useReveal } from '../../../hooks/useReveal';
import s from './Reveal.module.scss';

const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div' }) => {
  const { ref, visible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`${s.reveal} ${visible ? s.visible : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
