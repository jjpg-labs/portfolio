import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';

export default function Dashboard() {
  return (
    <div className="min-h-screen" data-testid="dashboard">
      <Header />

      <Services />

      <Projects />

      <Skills />
    </div>
  );
}
