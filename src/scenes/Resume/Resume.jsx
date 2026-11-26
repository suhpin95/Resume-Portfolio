import s from './Resume.module.scss';
import FilesIcon from '../../assets/resume-files.svg?react';
import DownloadIcon from '../../assets/download.svg?react';
import RootLayout from '../../layouts/RootLayout/RootLayout';
import Button from '../../components/UIElements/Button/Button';

const resumeLink = `${import.meta.env.BASE_URL}Suhas_Pindiproli_Sr_SWE_Resume.pdf`;

const Resume = () => {
  return (
    <RootLayout>
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
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}> download resume</span>
          <span className={s.filename}>.pdf</span>
        </Button>

        <div className={s.pdfWrapper}>
          <object data={resumeLink} type="application/pdf" width="100%" height="900">
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
