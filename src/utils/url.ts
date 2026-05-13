// Prefix any internal path with the deployment base so links work
// on GitHub Pages (https://hmvee.github.io/repo-portfolio/...).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (path: string) => `${base}${path}`;
