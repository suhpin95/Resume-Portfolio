import { describe, expect, it } from 'vitest';
import experience from './experience';
import profile from './profile';
import projects, { featuredProjects } from './projects';

describe('portfolio content', () => {
  it('exposes a complete profile', () => {
    expect(profile.name).toBe('Suhas Pindiproli');
    expect(profile.email).toContain('@');
    expect(profile.github).toContain('github.com');
    expect(profile.linkedin).toContain('linkedin.com');
    expect(profile.metrics.length).toBeGreaterThanOrEqual(4);
    expect(profile.focusAreas.length).toBeGreaterThanOrEqual(3);
  });

  it('provides projects with impact and technology metadata', () => {
    expect(projects.length).toBeGreaterThan(0);
    expect(featuredProjects.length).toBeGreaterThan(0);

    for (const project of projects) {
      expect(project.id).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.summary).toBeTruthy();
      expect(project.impact.length).toBeGreaterThan(0);
      expect(project.technologies.length).toBeGreaterThan(0);
    }
  });

  it('provides experience entries with highlights', () => {
    expect(experience.length).toBeGreaterThan(0);

    for (const job of experience) {
      expect(job.company).toBeTruthy();
      expect(job.role).toBeTruthy();
      expect(job.period).toBeTruthy();
      expect(job.highlights.length).toBeGreaterThan(0);
    }
  });
});
