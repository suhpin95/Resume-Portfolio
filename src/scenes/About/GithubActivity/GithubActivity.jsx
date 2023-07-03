import s from './GithubActivity.module.scss';
import GitHubCalendar from 'react-github-calendar';
import user from '../../../data/userOptions';

const GithubActivity = () => {
  const colorTheme = {
    background: 'transparent',
    text: '#ffffff',
    level4: '#8400b8',
    level3: '#b22ff4',
    level2: '#b265f6',
    level1: '#c084f5',
    level0: '#ecd9fc',
  };
  return (
    <div className={s.container}>
      <GitHubCalendar
        username={user.githubUserName}
        blockSize={15}
        blockMargin={5}
        theme={colorTheme}
        fontSize={16}
      />
    </div>
  );
};

export default GithubActivity;
