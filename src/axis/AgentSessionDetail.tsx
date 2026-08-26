import {
  ArrowLeft,
  Bot,
  Check,
  ChevronRight,
  CircleDot,
  Clock3,
  Database,
  FileCheck2,
  MessageSquareText,
  MoreHorizontal,
  OctagonX,
  Pause,
  Play,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { Button, DesignStatus, StatusChip, Surface } from '../components';
import './axis.css';

const progress = [
  { detail: 'Direct route admitted under configuration v3', label: 'Work admitted', state: 'complete', time: '14:02:08' },
  { detail: '7 governed sources assembled; 2 summaries re-fetched', label: 'Context assembled', state: 'complete', time: '14:02:11' },
  { detail: 'Read-only CRM query completed', label: 'Tool result captured', state: 'complete', time: '14:02:19' },
  { detail: 'Exact external recipient and content hash are bound', label: 'Waiting for approval', state: 'active', time: '14:02:26' },
  { detail: 'Send and receipt validation have not started', label: 'External action', state: 'pending', time: '—' },
] as const;

export function AgentSessionDetail() {
  return (
    <div className="axis-page axis-page--session">
      <DesignStatus contract="ACP AgentSession · progress · approval binding" />
      <button className="axis-back" type="button"><ArrowLeft size={15} /> Work</button>

      <header className="axis-session-header">
        <div className="axis-session-header__identity">
          <span className="axis-agent-avatar axis-agent-avatar--large"><Bot size={24} aria-hidden="true" /></span>
          <div>
            <div className="axis-session-header__meta"><span>Supplier Operations</span><ChevronRight size={13} /><code>agentsession_9c2</code></div>
            <h1>Draft a response for Northstar Components</h1>
            <div className="axis-session-header__tags">
              <StatusChip tone="warning" dot>Waiting for approval</StatusChip>
              <StatusChip tone="neutral">External send</StatusChip>
              <StatusChip tone="info">Configuration v3</StatusChip>
            </div>
          </div>
        </div>
        <div className="axis-page__actions">
          <Button variant="secondary" icon={<Pause size={15} />}>Pause</Button>
          <Button variant="danger" icon={<OctagonX size={15} />}>Cancel</Button>
          <Button variant="ghost" aria-label="More actions"><MoreHorizontal size={18} /></Button>
        </div>
      </header>

      <div className="axis-session-layout">
        <div className="axis-session-layout__main">
          <Surface as="section" padding="none" className="axis-panel">
            <div className="axis-panel__header">
              <div><span className="axis-eyebrow">Durable stream · sequence 19</span><h2>Session progress</h2></div>
              <StatusChip tone="success">Live · replayable</StatusChip>
            </div>
            <ol className="axis-progress">
              {progress.map((item) => (
                <li className={`axis-progress__item axis-progress__item--${item.state}`} key={item.label}>
                  <span className="axis-progress__rail" aria-hidden="true">
                    <span>{item.state === 'complete' ? <Check size={13} /> : item.state === 'active' ? <CircleDot size={13} /> : null}</span>
                  </span>
                  <div>
                    <div className="axis-progress__title"><strong>{item.label}</strong><time>{item.time}</time></div>
                    <p>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Surface>

          <Surface as="section" padding="md" className="axis-approval-card" tone="emphasis">
            <div className="axis-approval-card__icon"><ShieldCheck size={21} /></div>
            <div className="axis-approval-card__body">
              <span className="axis-eyebrow">Approval required · expires in 42 minutes</span>
              <h2>Send the prepared response to Northstar Components?</h2>
              <p>The exact recipient, content hash, connector action and policy snapshot are bound to this decision.</p>
              <dl className="axis-approval-facts">
                <div><dt>Recipient</dt><dd>procurement@northstar.example</dd></div>
                <div><dt>Action</dt><dd>send_email · Microsoft 365</dd></div>
                <div><dt>Authority</dt><dd>Finance Operations approver</dd></div>
                <div><dt>Proof</dt><dd>Complete · 8 evidence refs</dd></div>
              </dl>
              <div className="axis-approval-card__actions">
                <Button variant="secondary">Request changes</Button>
                <Button icon={<Play size={15} />}>Review and approve</Button>
              </div>
            </div>
          </Surface>
        </div>

        <aside className="axis-session-layout__aside" aria-label="Agent session context and proof">
          <Surface as="section" padding="md" className="axis-context-card">
            <div className="axis-panel__header axis-panel__header--flush"><div><span className="axis-eyebrow">Bound context</span><h2>Execution context</h2></div></div>
            <dl className="axis-context-list">
              <div><dt><Bot size={15} /> Agent</dt><dd>Supplier Operations</dd></div>
              <div><dt><ShieldCheck size={15} /> Authority</dt><dd><StatusChip tone="success">Verified</StatusChip></dd></div>
              <div><dt><Database size={15} /> Workspace</dt><dd>Procurement / AU</dd></div>
              <div><dt><Wrench size={15} /> Tool binding</dt><dd>mail.send · v2</dd></div>
              <div><dt><Clock3 size={15} /> Budget</dt><dd>1m 18s · $0.42</dd></div>
            </dl>
          </Surface>

          <Surface as="section" padding="md" className="axis-proof-card">
            <div className="axis-proof-card__top"><span className="axis-proof-card__icon"><FileCheck2 size={18} /></span><StatusChip tone="success">Complete</StatusChip></div>
            <span className="axis-eyebrow">Proof bundle</span>
            <strong>8 of 8 required refs</strong>
            <div className="axis-proof-bar"><span /></div>
            <p>Tenant, authority, policy, source, draft, approval target, runtime and audit evidence are reconstructable.</p>
            <Button variant="ghost" size="sm" trailingIcon={<ChevronRight size={14} />}>Inspect proof</Button>
          </Surface>

          <Surface as="section" padding="md" className="axis-nash-note">
            <Sparkles size={18} aria-hidden="true" />
            <div><span className="axis-eyebrow">Nash explains</span><p>This work is paused safely. Nothing has been sent, and approval will not be reusable if the recipient or content changes.</p></div>
            <button aria-label="Open conversation" type="button"><MessageSquareText size={16} /></button>
          </Surface>
        </aside>
      </div>
    </div>
  );
}
