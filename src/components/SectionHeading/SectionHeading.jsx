import s from './SectionHeading.module.scss';

const SectionHeading = ({ index, eyebrow, title, description, action }) => {
  return (
    <header className={s.heading}>
      <div className={s.meta}>
        <span className={s.index}>{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>

      <div className={s.row}>
        <h2 className={s.title}>{title}</h2>
        <div className={s.copy}>
          {description ? <p className={s.description}>{description}</p> : null}
          {action}
        </div>
      </div>
    </header>
  );
};

export default SectionHeading;
