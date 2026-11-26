import s from './GithubActivity.module.scss';
import { GitHubCalendar } from 'react-github-calendar';
import user from '../../../data/userOptions';

const GithubActivity = () => {
  return (
    <div className={s.container}>
      <GitHubCalendar
        username={user.githubUserName}
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        theme={{
          light: ['#efece4', '#99f6e4', '#2dd4bf', '#0f766e', '#134e4a'],
          dark: ['#18212b', '#164e63', '#0e7490', '#22d3ee', '#a5f3fc'],
        }}
      />
    </div>
  );
};

export default GithubActivity;
