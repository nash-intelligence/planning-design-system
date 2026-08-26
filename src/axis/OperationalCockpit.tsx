import {
  AlertTriangle,
  ArrowRight,
  Bot,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  FileWarning,
  GitPullRequest,
  ShieldAlert,
  Sparkles,
  Users,
} from 'lucide-react';
import { Button, DesignStatus, MetricCard, StatusChip, Surface } from '../components';
import './axis.css';

const attentionItems = [
  {
    accent: 'warning',
    eyebrow: 'Approval expires in 42m',
    icon: Clock3,
    meta: 'Supplier response · External send',
    title: 'Review a drafted contract response',
  },
  {
    accent: 'danger',
    eyebrow: 'Proof gap · High',
    icon: FileWarning,
    meta: 'Agent session · agentsession_9c2',
    title: 'Runtime output is missing its checksum',
  },
  {
    accent: 'info',
    eyebrow: 'Human steering requested',
    icon: Sparkles,
    meta: 'Customer renewal workflow',
    title: 'Agent needs a decision on renewal scope',
  },
] as const;

const sessions = [
  { agent: 'Supplier Operations', state: 'Waiting for approval', task: 'Draft response for Northstar', time: '8m', tone: 'warning' },
  { agent: 'Revenue Analyst', state: 'Running', task: 'Reconcile Q3 pipeline evidence', time: '12m', tone: 'success' },
  { agent: 'Development Agent', state: 'In review', task: 'Prepare repository change #418', time: '34m', tone: 'info' },
] as const;

export function OperationalCockpit() {
  return (
    <div className="axis-page">
      <DesignStatus contract="Axis admin blueprint · ACP session/progress contracts" />
      <header className="axis-page__header">
        <div>
          <span className="axis-eyebrow">Wednesday, 26 August</span>
          <h1>Good afternoon, Max.</h1>
          <p>Your organisation is healthy. Three items need attention.</p>
        </div>
        <div className="axis-page__actions">
          <Button variant="secondary">View audit</Button>
          <Button icon={<Sparkles size={16} />}>Ask Nash</Button>
        </div>
      </header>

      <section className="axis-metrics" aria-label="Organisation summary">
        <MetricCard eyebrow="Active agent sessions" value="18" change="4 started today" direction="up" icon={<Bot size={19} />} />
        <MetricCard eyebrow="Awaiting approval" value="6" change="2 expire soon" direction="down" icon={<Clock3 size={19} />} />
        <MetricCard eyebrow="Proof completeness" value="98%" change="1.4% this week" direction="up" icon={<CheckCircle2 size={19} />} />
        <MetricCard eyebrow="Month-to-date spend" value="$4.8k" change="72% of budget" direction="flat" icon={<CircleDollarSign size={19} />} />
      </section>

      <section className="axis-cockpit-grid">
        <Surface as="section" padding="none" className="axis-panel axis-panel--attention">
          <div className="axis-panel__header">
            <div><span className="axis-eyebrow">Priority queue</span><h2>Attention required</h2></div>
            <Button variant="ghost" size="sm" trailingIcon={<ArrowRight size={14} />}>View all</Button>
          </div>
          <div className="axis-attention-list">
            {attentionItems.map((item) => {
              const Icon = item.icon;
              return (
                <button className="axis-attention" key={item.title} type="button">
                  <span className={`axis-attention__icon axis-attention__icon--${item.accent}`}><Icon size={18} aria-hidden="true" /></span>
                  <span className="axis-attention__copy">
                    <small>{item.eyebrow}</small>
                    <strong>{item.title}</strong>
                    <span>{item.meta}</span>
                  </span>
                  <ArrowRight className="axis-attention__arrow" size={17} aria-hidden="true" />
                </button>
              );
            })}
          </div>
        </Surface>

        <Surface as="section" padding="none" className="axis-panel">
          <div className="axis-panel__header">
            <div><span className="axis-eyebrow">Live now</span><h2>Agent sessions</h2></div>
            <Button variant="ghost" size="sm">Open work</Button>
          </div>
          <div className="axis-session-list">
            {sessions.map((session) => (
              <button className="axis-session-row" key={session.task} type="button">
                <span className="axis-agent-avatar"><Bot size={17} aria-hidden="true" /></span>
                <span className="axis-session-row__copy">
                  <strong>{session.task}</strong>
                  <span>{session.agent}</span>
                </span>
                <StatusChip tone={session.tone} dot>{session.state}</StatusChip>
                <time>{session.time}</time>
              </button>
            ))}
          </div>
        </Surface>

        <Surface as="section" padding="md" className="axis-panel axis-panel--posture" tone="emphasis">
          <div className="axis-panel__header axis-panel__header--flush">
            <div><span className="axis-eyebrow">Governance</span><h2>Control posture</h2></div>
            <StatusChip tone="success" dot>Healthy</StatusChip>
          </div>
          <div className="axis-posture-score">
            <div className="axis-posture-score__ring"><strong>94</strong><span>/ 100</span></div>
            <div><strong>All critical controls are enforced</strong><p>One low-risk policy needs review before Friday.</p></div>
          </div>
          <ul className="axis-control-list">
            <li><CheckCircle2 size={16} /><span>Tenant and actor context</span><strong>Enforced</strong></li>
            <li><CheckCircle2 size={16} /><span>Approval bindings</span><strong>Enforced</strong></li>
            <li><AlertTriangle size={16} /><span>Runtime policy review</span><strong>1 due</strong></li>
          </ul>
        </Surface>

        <Surface as="section" padding="md" className="axis-panel">
          <div className="axis-panel__header axis-panel__header--flush">
            <div><span className="axis-eyebrow">Last 60 minutes</span><h2>Governed events</h2></div>
          </div>
          <ol className="axis-event-list">
            <li><span className="axis-event-list__marker axis-event-list__marker--mint"><ShieldAlert size={14} /></span><div><strong>Policy decision blocked connector fallback</strong><span>Revenue Analyst · 3m ago</span></div></li>
            <li><span className="axis-event-list__marker axis-event-list__marker--blue"><GitPullRequest size={14} /></span><div><strong>Development Agent opened PR #418</strong><span>Repository work · 11m ago</span></div></li>
            <li><span className="axis-event-list__marker axis-event-list__marker--violet"><Users size={14} /></span><div><strong>Approval delegated to Finance Ops</strong><span>Renewal workflow · 24m ago</span></div></li>
          </ol>
        </Surface>
      </section>
    </div>
  );
}
