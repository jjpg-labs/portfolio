import { PROJECTS } from './data';
import { dictionaries } from '@/app/i18n/dictionaries';
import manifest from '@/app/manifest';

const byId = (id: string) => PROJECTS.find((p) => p.id === id)!;

describe('project data', () => {
  it('marks accounting as private', () => {
    expect(byId('accounting').repoPrivate).toBe(true);
  });

  it('only links accounting repos from private projects', () => {
    PROJECTS.filter((p) => !p.repoPrivate).forEach((p) => {
      const links = [p.linkRepo, p.linkRepo2].join(' ');
      expect(links).not.toMatch(/accounting-server|accounting-manager/);
    });
  });

  it('marks nexfit as production', () => {
    expect(byId('nexfit').status).toBe('production');
  });

  it('keeps vereda unchanged', () => {
    const v = byId('vereda');
    expect(v.linkLive).toBe('https://vereda.jjpg.dev/events/medina-roja');
    expect(v.liveNofollow).toBe(true);
    expect(v.repoPrivate).toBe(true);
    expect(v.status).toBe('in-dev');
  });
});

describe('availability copy', () => {
  const banned = /disponible de inmediato|available (now|immediately)/i;

  const strings = (v: unknown): string[] =>
    typeof v === 'string'
      ? [v]
      : v && typeof v === 'object'
        ? Object.values(v).flatMap(strings)
        : [];

  (['es', 'en'] as const).forEach((locale) => {
    it(`has no banned phrase in ${locale} dictionary`, () => {
      expect(
        strings(dictionaries[locale]).filter((s) => banned.test(s))
      ).toEqual([]);
    });
  });

  it('has no banned phrase in the manifest', () => {
    expect(manifest().description).not.toMatch(banned);
  });
});
