# Nash Design System and Storybook

## Purpose

The Nash Design System is the source-owned visual and component foundation used to model Nash product interfaces. Its executable review surface is the Nash Axis Storybook in this repository.

Storybook is **executable design documentation**. It makes foundations, reusable components and synthetic experience compositions visible and reviewable before a product application exists. It is not a Nash runtime, backend, deployed customer surface or proof that an experience is implemented in production.

## Authority order

Use this order when product semantics and a visual specimen appear to disagree:

1. Canonical architecture, product and OpenSpec contracts define required behaviour, records, state, authority and proof.
2. [`../src/styles/tokens.css`](../src/styles/tokens.css) owns Nash visual tokens.
3. [`../src/components/`](../src/components/) owns reusable UI primitives.
4. [`../src/axis/`](../src/axis/) owns current Axis experience compositions.
5. [`../src/stories/`](../src/stories/) projects those sources into Storybook for review.

A story may illustrate a contract but cannot redefine it. A screenshot, built Storybook or reviewed composition does not prove backend state, persistence, authorization, accessibility in a product application or deployment.

## Current catalogue

| Storybook section | Current source-backed specimens | Maturity |
| --- | --- | --- |
| Foundations | visual language, semantic colour, surface hierarchy, typography and design principles | candidate tokens; exploratory expression |
| Components | Button and Status Chip, with interactive controls and operational variants | candidate |
| Axis Experiences | application shell, operational cockpit and durable agent session waiting for approval | exploratory |

The catalogue describes files present in this repository. Proposed components or screens must not be described as available until their source and story are committed and the static build includes them.

## Visual direction

The initial Nash visual language adapts the product's existing attention metaphor:

- multiple signals converge into focused action;
- dark, calm surfaces keep dense operational information legible;
- mint marks safe focused action and healthy control posture;
- blue communicates information, amber requests attention, coral marks blocked/dangerous state and violet marks delegation/agentic context;
- bright emphasis stays close to the decision, blocker or evidence that needs attention;
- tenant, role, policy, approval and proof context remain visible near governed actions.

These foundations are candidates, not a locked brand system. Changes should preserve semantic roles and accessibility even when the visual expression evolves.

## Axis modelling contract

Axis stories derive from canonical documents in [`nash-intelligence/planning`](https://github.com/nash-intelligence/planning):

- [`docs/product/surface-areas/axis-admin-ui-blueprint.md`](https://github.com/nash-intelligence/planning/blob/develop/docs/product/surface-areas/axis-admin-ui-blueprint.md);
- [`docs/product/surface-areas/axis-admin-console-ia.md`](https://github.com/nash-intelligence/planning/blob/develop/docs/product/surface-areas/axis-admin-console-ia.md);
- [`docs/architecture/axis/axis-agent-control-plane.md`](https://github.com/nash-intelligence/planning/blob/develop/docs/architecture/axis/axis-agent-control-plane.md);
- [`docs/architecture/contracts/api-and-data-contracts.md`](https://github.com/nash-intelligence/planning/blob/develop/docs/architecture/contracts/api-and-data-contracts.md).

Every Axis experience story must:

- use synthetic data only;
- identify its design maturity and governing contract;
- distinguish authoritative records from UI projections;
- show blocked, waiting, partial or unavailable state truthfully;
- keep high-risk actions close to authority, policy, approval and proof context;
- avoid suggesting that a visual control performs a backend side effect;
- add empty, loading, error, permission and responsive variants before the experience can move from exploratory to approved.

## Maturity model

| Maturity | Meaning |
| --- | --- |
| `exploratory` | A source-backed composition for discussing layout and interaction direction. It may be incomplete and is not implementation authorization. |
| `candidate` | Reusable source with documented semantics, variants and accessibility intent. It is ready for broader review. |
| `approved` | Human-approved design with required states, accessibility evidence and contract traceability. Product implementation status remains separate. |

Use the `DesignStatus` specimen label on full experience stories so reviewers cannot confuse exploratory Storybook content with shipped UI.

## Local use

Requirements:

- Node.js `^20.19.0` or `>=22.12.0`;
- npm with the committed lockfile;
- Docker Desktop for the isolated default development and static-build commands.

From the repository root:

```powershell
npm ci
npm run storybook
```

`npm run storybook` uses the pinned local Docker development service so the Nash workspace remains isolated from machine-level package-manager configuration. Open `http://localhost:6006`; source changes are mounted into the service. Stop it with `npm run storybook:down`.

In an uncontaminated Node checkout, direct native development remains available:

```powershell
npm run storybook:native
```

Validation:

```powershell
npm run typecheck
npm run build-storybook:native
npm run verify-storybook
```

The static build is generated under `storybook-static/` and intentionally ignored by Git. Static output proves that the review projection builds; it does not publish or deploy it.

If a Windows checkout sits below an unrelated parent Yarn Plug'n'Play manifest, Storybook's manager resolver can incorrectly inherit that parent package boundary. Use the clean, pinned container build instead of changing or deleting the parent workspace:

```powershell
npm run build-storybook
npm run verify-storybook
```

This exports the same static artifact to `storybook-static/` through the repository-owned Dockerfile.

## Contribution rules

1. Bind a new experience to canonical product/architecture requirements before modelling it.
2. Add or change semantic tokens instead of hard-coding a second visual system into stories.
3. Put reusable behaviour in `src/components`, product composition in `src/axis`, and only story configuration/fixtures in `src/stories`.
4. Include positive, disabled, blocked and failure variants appropriate to the component's maturity.
5. Run TypeScript and the static Storybook build before review.
6. Record publication, product integration and browser acceptance as separate evidence if those steps are later authorized.

## Current non-goals

- publishing Storybook to GitHub Pages or another environment;
- implementing the Axis backend or treating mock controls as real actions;
- declaring the initial colour/type direction final brand approval;
- importing customer information, real credentials or provider sessions;
- claiming every screen in the Axis blueprint is already present in Storybook.
