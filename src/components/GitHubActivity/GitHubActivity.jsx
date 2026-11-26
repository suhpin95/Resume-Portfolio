import { GitHubCalendar } from 'react-github-calendar';
import profile from '../../data/profile';
import { useThemeContext } from '../../hooks/themeHook/themeHook';
import s from './GitHubActivity.module.scss';

const GitHubActivity = () => {
  const { dark } = useThemeContext();

  return (
    <div className={s.wrapper}>
      <GitHubCalendar
        username={profile.githubUsername}
        colorScheme={dark ? 'dark' : 'light'}
        blockSize={13}
        blockMargin={4}
        fontSize={14}
        theme={{
          light: ['#e8e3d8', '#99f6e4', '#2dd4bf', '#0f766e', '#134e4a'],
          dark: ['#18212b', '#164e63', '#0e7490', '#22d3ee', '#a5f3fc'],
        }}
        labels={{
          totalCount: '{{count}} contributions in the last year',
        }}
      />
    </div>
  );
};

export default GitHubActivity;
