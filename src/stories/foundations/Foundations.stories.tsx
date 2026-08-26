import type { Meta, StoryObj } from '@storybook/react-vite';
import { DesignStatus } from '../../components';
import './foundations.css';

const meta = {
  title: 'Foundations/Visual Language',
  parameters: {
    docs: {
      description: {
        component: 'The current exploratory Nash visual foundation. Tokens are source-owned in styles/tokens.css; this story is their executable review projection.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const colors = [
  { label: 'Focused action', token: '--nash-mint-500', value: '#76e4c4' },
  { label: 'Information', token: '--nash-blue-500', value: '#8ea7ff' },
  { label: 'Needs attention', token: '--nash-amber-500', value: '#f6b96b' },
  { label: 'Blocked / dangerous', token: '--nash-coral-500', value: '#ff8f78' },
  { label: 'Delegated / agentic', token: '--nash-violet-500', value: '#c1a7ff' },
] as const;

const surfaces = [
  { label: 'Canvas', token: '--nash-surface-canvas' },
  { label: 'Subtle', token: '--nash-surface-subtle' },
  { label: 'Raised', token: '--nash-surface-raised' },
  { label: 'Overlay', token: '--nash-surface-overlay' },
] as const;

export const SystemOverview: Story = {
  render: () => (
    <div className="nash-story-canvas foundation-page">
      <div className="nash-story-stack">
        <DesignStatus contract="Business Agent visual language · Axis admin blueprint" />
        <header className="foundation-hero">
          <div className="foundation-hero__signal" aria-hidden="true"><span /><span /><span /><i /></div>
          <div>
            <span className="foundation-kicker">Nash visual language · candidate 0.1</span>
            <h1>Signal becomes focused action.</h1>
            <p>Dense operational truth, calm hierarchy and visible governance. Brightness is reserved for what needs human attention.</p>
          </div>
        </header>

        <section className="foundation-section">
          <div className="foundation-section__heading"><span>01</span><div><h2>Colour roles</h2><p>Semantic intent comes before decorative colour.</p></div></div>
          <div className="foundation-colors">
            {colors.map((color) => (
              <article className="foundation-color" key={color.token}>
                <div style={{ background: `var(${color.token})` }} />
                <strong>{color.label}</strong>
                <code>{color.token}</code>
                <span>{color.value}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="foundation-section">
          <div className="foundation-section__heading"><span>02</span><div><h2>Surface hierarchy</h2><p>Elevation is quiet; borders and focus do the explanatory work.</p></div></div>
          <div className="foundation-surfaces">
            {surfaces.map((surface) => (
              <article key={surface.token} style={{ background: `var(${surface.token})` }}>
                <span>{surface.label}</span><code>{surface.token}</code>
              </article>
            ))}
          </div>
        </section>

        <section className="foundation-section foundation-type">
          <div className="foundation-section__heading"><span>03</span><div><h2>Type and voice</h2><p>Direct, compact and operational without becoming mechanical.</p></div></div>
          <div className="foundation-type__specimens">
            <div><span>Display · 40</span><strong>Three items need your attention.</strong></div>
            <div><span>Heading · 22</span><strong>Agent session waiting for approval</strong></div>
            <div><span>Body · 16</span><p>The exact recipient and content hash are bound to this decision.</p></div>
            <div><span>Operational · 12</span><code>agentsession_9c2 · sequence 19 · proof complete</code></div>
          </div>
        </section>

        <section className="foundation-principles" aria-label="Design principles">
          <article><span>01</span><h3>Focus attention</h3><p>Use contrast to identify decisions, blockers and meaningful changes—not to decorate every surface.</p></article>
          <article><span>02</span><h3>Show the boundary</h3><p>Tenant, role, policy, approval and proof posture should stay near the action they govern.</p></article>
          <article><span>03</span><h3>Keep truth inspectable</h3><p>Every summary must lead to the durable record, safe explanation or evidence behind it.</p></article>
        </section>
      </div>
    </div>
  ),
};
