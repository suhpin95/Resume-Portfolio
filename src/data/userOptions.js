import profile from './profile';

/**
 * Shared social/profile links used by legacy components.
 * @type {{github: string, linkedIn: string, githubUserName: string}}
 */
const user = {
  github: profile.github,
  linkedIn: profile.linkedin,
  githubUserName: profile.githubUsername,
};

export default user;
