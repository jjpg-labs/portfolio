Create a new page/section in the portfolio following existing patterns.

## Arguments
$ARGUMENTS

Expected format: `<sectionName>`. Example: "blog" or "experience".

## Process

### 1. Read existing patterns
Read an existing page (e.g., `src/app/projects/page.tsx`) to understand the layout and component patterns used.

### 2. Create page
Path: `src/app/<sectionName>/page.tsx`

Follow the existing pattern:
- Import shared components
- Use Tailwind classes consistent with other pages
- Support light/dark theme via next-themes

### 3. Add navigation
Update the navigation component to include a link to the new section.

### 4. Verify
- Run `npx tsc --noEmit`
- Check that the page renders at `localhost:3000/<sectionName>`
- Verify light/dark theme works correctly
