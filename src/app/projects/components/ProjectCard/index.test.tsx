import { render, screen } from '@testing-library/react';
import ProjectCard from './index';
import { Project } from '../../ProjectsClient';
import { LocaleProvider } from '@/app/context/LocaleContext';

const mockProject: Project = {
  title: 'Test Project',
  role: 'Back-End',
  shortDescription: 'A short description of the project.',
  technologies: ['Node.js', 'Express', 'MongoDB'],
  linkLive: 'https://live.example.com',
  linkRepo: 'https://github.com/example/repo',
  id: 'test-id',
  imageCover: '/img/test.jpg',
};

const renderWithLocale = (ui: React.ReactElement) =>
  render(<LocaleProvider>{ui}</LocaleProvider>);

describe('ProjectCard', () => {
  it('renders project title', () => {
    renderWithLocale(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders project role', () => {
    renderWithLocale(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Back-End')).toBeInTheDocument();
  });

  it('renders project short description', () => {
    renderWithLocale(<ProjectCard project={mockProject} />);
    expect(
      screen.getByText('A short description of the project.')
    ).toBeInTheDocument();
  });

  it('renders all technologies', () => {
    renderWithLocale(<ProjectCard project={mockProject} />);
    mockProject.technologies.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('renders project cover image', () => {
    renderWithLocale(<ProjectCard project={mockProject} />);
    const img = screen.getByRole('img', { name: 'Test Project' });
    expect(img).toBeInTheDocument();
  });

  it('renders live link with correct href', () => {
    renderWithLocale(<ProjectCard project={mockProject} />);
    const liveLink = screen.getByText(/En Vivo/i).closest('a');
    expect(liveLink).toHaveAttribute('href', mockProject.linkLive);
    expect(liveLink).toHaveAttribute('target', '_blank');
    expect(liveLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders repo link with correct href', () => {
    renderWithLocale(<ProjectCard project={mockProject} />);
    const repoLink = screen.getByText(/Código/i).closest('a');
    expect(repoLink).toHaveAttribute('href', mockProject.linkRepo);
    expect(repoLink).toHaveAttribute('target', '_blank');
    expect(repoLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not render live link when linkLive is #', () => {
    const noLiveProject = { ...mockProject, linkLive: '#' };
    renderWithLocale(<ProjectCard project={noLiveProject} />);
    expect(screen.queryByText(/En Vivo/i)).not.toBeInTheDocument();
  });

  it('renders second repo link when linkRepo2 is provided', () => {
    const multiRepoProject = {
      ...mockProject,
      linkRepo2: 'https://github.com/example/repo-ui',
    };
    renderWithLocale(<ProjectCard project={multiRepoProject} />);
    const repoLinks = screen.getAllByText(/Código/i);
    expect(repoLinks.length).toBeGreaterThan(1);
  });
});
