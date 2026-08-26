# Nash Planning Design System

The source-owned visual language, reusable components, and executable Storybook used to model Nash Axis experiences before product implementation.

This standalone repository was seeded from [`nash-intelligence/planning`](https://github.com/nash-intelligence/planning) at commit [`07f1964`](https://github.com/nash-intelligence/planning/commit/07f19640354824773916c5a1198e01dad6b2732a), where the first Nash Storybook catalogue was reviewed and landed. Changes made here after that point are owned by this repository; product behaviour and operational contracts remain governed by the planning repository.

## Current catalogue

- Foundations: visual language, semantic colour, typography, surfaces, and design principles.
- Components: Button and Status Chip specimens with interactive and operational variants.
- Axis experiences: application shell, operational cockpit, and an ACP agent session waiting for approval.

All data in the stories is synthetic. A Storybook composition is a design and review projection, not proof of a working backend, authorization, persistence, deployment, or customer-facing product.

## Run locally

Docker Desktop is the default isolated path:

```powershell
npm run storybook
```

Open `http://localhost:6006`. Stop the service with `npm run storybook:down`.

For a native Node checkout that is not below an unrelated Yarn Plug'n'Play workspace:

```powershell
npm ci
npm run storybook:native
```

## Validate and build

```powershell
npm ci
npm run typecheck
npm run build-storybook
npm run verify-storybook
```

`build-storybook` uses the pinned container and exports the static site to `storybook-static/`. Generated output is intentionally ignored; the committed source and lockfile are the reproducible authority.

See [the design-system contract](docs/design-system.md) for authority order, maturity definitions, Axis modelling rules, and contribution requirements.
