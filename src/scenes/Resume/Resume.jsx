import DownloadIcon from '../../assets/download.svg?react';
import FilesIcon from '../../assets/resume-files.svg?react';
import Button from '../../components/UIElements/Button/Button';
import profile from '../../data/profile';
import RootLayout from '../../layouts/RootLayout/RootLayout';
import s from './Resume.module.scss';

const resumeLink = `${import.meta.env.BASE_URL}Suhas_Pindiproli_Sr_SWE_Resume.pdf`;

const Resume = () => {
  return (
    <RootLayout
      title="Resume - Suhas Pindiproli"
      description="Resume and professional summary for Suhas Pindiproli, senior software engineer focused on distributed systems and AI infrastructure."
    >
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            My <br /> Resume
          </h1>

          <div className={s.filesImg}>
            <FilesIcon />
          </div>
        </div>

        <Button
          style={{ margin: 'auto', width: '15rem' }}
          className="primary"
          href={resumeLink}
          target="_blank"
          rel="noreferrer"
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}> download resume</span>
          <span className={s.filename}>.pdf</span>
        </Button>

        <section className={s.summary} aria-labelledby="resume-summary-title">
          <p className="eyebrow">Professional summary</p>
          <h2 id="resume-summary-title">Platform engineering, built for production.</h2>
          <p className={s.profileSummary}>{profile.summary}</p>

          <dl className={s.facts}>
            <div>
              <dt>Role</dt>
              <dd>{profile.role}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>{profile.focus}</dd>
            </div>
          </dl>

          <div className={s.expertise}>
            <h3>Areas of expertise</h3>
            <ul>
              {profile.focusAreas.map((area) => (
                <li key={area.title}>
                  <strong>{area.title}</strong>
                  <span>{area.tags.join(' · ')}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={s.education}>
            <h3>Education</h3>
            <ul>
              {profile.education.map((item) => (
                <li key={item.school}>
                  <strong>{item.degree}</strong>
                  <span>
                    {item.school} · {item.location}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <h2 className={s.previewTitle}>Full resume</h2>
        <div className={s.pdfWrapper}>
          <object
            data={resumeLink}
            type="application/pdf"
            width="100%"
            height="900"
            aria-label="PDF preview of Suhas Pindiproli's resume"
          >
            <p>
              Your browser does not support embedded PDFs.{' '}
              <a href={resumeLink}>Download the resume instead.</a>
            </p>
          </object>
        </div>
      </div>
    </RootLayout>
  );
};

export default Resume;
