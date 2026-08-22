import { PROJECTS } from './data';
import { dictionaries } from '@/app/i18n/dictionaries';

type Copy = Record<
  string,
  { home: string; full: string; outcome: string; stack: string }
>;

// Project copy is keyed by id and lives outside `data.ts`, so a project can be
// added — or a locale extended — while leaving a field silently empty. That is
// exactly what happened to `curio.outcome`, which rendered nothing on /projects
// for as long as it stayed ''. These tests make that a failing build instead.
describe('project copy', () => {
  const locales = ['es', 'en'] as const;
  const fields = ['home', 'full', 'outcome', 'stack'] as const;

  locales.forEach((locale) => {
    describe(locale, () => {
      const copy = dictionaries[locale].projectCopy as Copy;

      PROJECTS.forEach((project) => {
        fields.forEach((field) => {
          it(`has non-empty ${field} copy for "${project.id}"`, () => {
            expect(copy[project.id]?.[field]?.trim()).toBeTruthy();
          });
        });
      });
    });
  });

  it('defines copy for every project and no orphan entries', () => {
    const ids = PROJECTS.map((p) => p.id).sort();
    locales.forEach((locale) => {
      const keys = Object.keys(dictionaries[locale].projectCopy).sort();
      expect(keys).toEqual(ids);
    });
  });
});
