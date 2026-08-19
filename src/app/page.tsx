import Header from './dashboard/components/Header';
import Skills from './dashboard/components/Skills';
import Projects from './dashboard/components/Projects';

export default function HomePage() {
  return (
    <div className="min-h-screen" data-testid="dashboard">
      <Header />

      <Projects />

      <Skills />
    </div>
  );
}
