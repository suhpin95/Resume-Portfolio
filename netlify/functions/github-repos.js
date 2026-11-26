export default async (request) => {
  if (request.method !== 'GET') {
    return new Response('Method not allowed', {
      status: 405,
      headers: { Allow: 'GET' },
    });
  }

  const headers = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'suhas-pindiproli-portfolio',
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(
    'https://api.github.com/users/suhpin95/repos?sort=updated&per_page=6',
    { headers },
  );

  if (!response.ok) {
    return new Response('Unable to fetch GitHub repositories', {
      status: response.status,
      headers: { 'Cache-Control': 'no-store' },
    });
  }

  const repositories = await response.json();
  const data = repositories.map((repository) => ({
    name: repository.name,
    description: repository.description,
    language: repository.language,
    stars: repository.stargazers_count,
    forks: repository.forks_count,
    updatedAt: repository.updated_at,
    url: repository.html_url,
    topics: repository.topics || [],
  }));

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=3600',
    },
  });
};
