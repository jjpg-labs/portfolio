import Header from './dashboard/components/Header';
import Experience from './dashboard/components/Experience';
import Skills from './dashboard/components/Skills';
import Projects from './dashboard/components/Projects';

// The home is fully static content (no data fetching), so Next would
// otherwise bake it into the Full Route Cache at build time. That cache
// persists across the container's lifetime; combined with a proxy/browser
// that also caches the HTML, content edits were still showing stale after
// a redeploy. Force this route to render fresh on every request so a new
// deploy is guaranteed to be visible immediately (see next.config.js for
// the matching no-store header on this route).
export const revalidate = 0;

export default function HomePage() {
  return (
    <div className="min-h-screen" data-testid="dashboard">
      <Header />

      <Experience />

      <Projects />

      <Skills />
    </div>
  );
}
