# date-and-time

<div align="center">
  <img src="https://raw.githubusercontent.com/knowledgecode/date-and-time/refs/heads/master/logo.png" alt="date-and-time" width="256">
</div>

<div align="center">

[![CI](https://github.com/knowledgecode/date-and-time/actions/workflows/test.yml/badge.svg)](https://github.com/knowledgecode/date-and-time/actions/workflows/test.yml)
[![Coverage](https://codecov.io/gh/knowledgecode/date-and-time/graph/badge.svg)](https://codecov.io/gh/knowledgecode/date-and-time)
[![npm](https://img.shields.io/npm/v/date-and-time)](https://www.npmjs.com/package/date-and-time)

</div>

The simplest, most intuitive date and time library.

## Installation

```shell
npm install date-and-time
```

### ES Modules (Recommended)

```typescript
import { format } from 'date-and-time';

format(new Date(), 'ddd, MMM DD YYYY');
// => Wed, Jul 09 2025
```

### CommonJS

```typescript
const { format } = require('date-and-time');

format(new Date(), 'ddd, MMM DD YYYY');
// => Wed, Jul 09 2025
```

## CDN Usage

### Via jsDelivr

```html
<script type="module">
  import { format } from 'https://cdn.jsdelivr.net/npm/date-and-time/dist/index.js';

  console.log(format(new Date(), 'YYYY/MM/DD'));
</script>
```

### Via unpkg

```html
<script type="module">
  import { format } from 'https://unpkg.com/date-and-time/dist/index.js';

  console.log(format(new Date(), 'YYYY/MM/DD'));
</script>
```

## Migration

Version `4.x` has been completely rewritten in TypeScript and some features from `3.x` are no longer compatible. The main changes are as follows:

- The `timezone` and `timespan` plugins have been integrated into the main library
- Tree shaking is now supported
- Supports `ES2021` and no longer supports older browsers

For details, please refer to [migration.md](https://github.com/knowledgecode/date-and-time/blob/master/docs/migration.md). If you use an AI coding agent, the `date-and-time-migration` skill can carry out the migration; see [Agent Skills](#agent-skills).

## API

For comprehensive documentation and examples, visit: **[GitHub Pages](https://knowledgecode.github.io/date-and-time/)**

## Agent Skills

This repository ships two [Agent Skills](https://agentskills.io) that help AI coding agents (Claude Code, Codex, Cursor, GitHub Copilot, Gemini CLI, and others) work with this library:

| Skill | Use it to |
|-------|-----------|
| [`date-and-time`](https://github.com/knowledgecode/date-and-time/tree/master/skills/date-and-time) | Write code with date-and-time v4: formatting, parsing, timezones, locales, plugins, date arithmetic, durations |
| [`date-and-time-migration`](https://github.com/knowledgecode/date-and-time/tree/master/skills/date-and-time-migration) | Migrate a project from date-and-time v3 to v4 |

Each skill is self-contained, so you can install either one on its own. The skills are not part of the npm package.

### Install

With the [`skills`](https://github.com/vercel-labs/skills) CLI:

```shell
# Both skills, into the current project
npx skills add knowledgecode/date-and-time --skill date-and-time --skill date-and-time-migration

# One skill, globally, for a specific agent (Claude Code here)
npx skills add knowledgecode/date-and-time --skill date-and-time -g -a claude-code

# See what the repository offers before installing
npx skills add knowledgecode/date-and-time --list
```

Or copy a skill directory by hand into your agent's skills directory (`.claude/skills/` for Claude Code, `.agents/skills/` for agents that follow the shared convention):

```shell
git clone --depth 1 https://github.com/knowledgecode/date-and-time.git
mkdir -p .claude/skills
cp -R date-and-time/skills/date-and-time .claude/skills/
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
