import { access, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const output = resolve(root, 'storybook-static');
const requiredFiles = ['index.html', 'iframe.html', 'index.json'];
const requiredStories = [
  'foundations-visual-language--system-overview',
  'components-button--playground',
  'components-button--variants',
  'components-status-chip--playground',
  'components-status-chip--operational-states',
  'axis-experiences-application-shell--default',
  'axis-experiences-operational-cockpit--healthy-with-attention',
  'axis-experiences-agent-session--waiting-for-approval',
];

await Promise.all(requiredFiles.map((file) => access(resolve(output, file))));

const index = JSON.parse(await readFile(resolve(output, 'index.json'), 'utf8'));
const entries = Object.values(index.entries ?? {});
const storyIds = new Set(entries.filter((entry) => entry.type === 'story').map((entry) => entry.id));
const missing = requiredStories.filter((storyId) => !storyIds.has(storyId));

if (missing.length > 0) {
  throw new Error(`Static Storybook is missing required stories: ${missing.join(', ')}`);
}

const docsCount = entries.filter((entry) => entry.type === 'docs').length;
console.log(`Verified static Storybook: ${storyIds.size} stories, ${docsCount} documentation entries, ${requiredFiles.length} required files.`);
