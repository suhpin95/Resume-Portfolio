import { useEffect, useState } from 'react';
import { githubFallback } from '../../data/githubFallback';
import profile from '../../data/profile';
import s from './GitHubRepositories.module.scss';

const GitHubRepositories = () => {
  const [repositories, setRepositories] = useState(githubFallback);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const controller = new AbortController();

    fetch('/api/github-repos', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`GitHub endpoint returned ${response.status}`);
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data))
          throw new Error('GitHub endpoint returned invalid data');
        setRepositories(data);
        setStatus('live');
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setStatus('snapshot');
      });

    return () => controller.abort();
  }, []);

  return (
    <section className={s.section} aria-labelledby="github-repositories-title">
      <div className={s.heading}>
        <div>
          <p className="eyebrow">Open source</p>
          <h2 id="github-repositories-title">Recent repositories</h2>
        </div>
        <a
          className="link-underline"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          All repositories <span aria-hidden="true">↗</span>
        </a>
      </div>
      {status === 'snapshot' && (
        <p className={s.snapshotNote} role="status">
          Showing a saved repository snapshot; live GitHub data is temporarily
          unavailable.
        </p>
      )}
      <ul className={s.grid}>
        {repositories.map((repository) => (
          <li key={repository.name} className={s.card}>
            <div className={s.cardTop}>
              <h3>
                <a href={repository.url} target="_blank" rel="noreferrer">
                  {repository.name}
                </a>
              </h3>
              {repository.language && <span>{repository.language}</span>}
            </div>
            <p className={s.description}>
              {repository.description || 'No description provided.'}
            </p>
            <ul className={s.topics} aria-label={`Topics for ${repository.name}`}>
              {(repository.topics || []).slice(0, 4).map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <p className={s.stats}>
              <span>{repository.stars ?? 0} stars</span>
              <span>{repository.forks ?? 0} forks</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GitHubRepositories;
