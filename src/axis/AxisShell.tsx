import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  Bell,
  Bot,
  Boxes,
  CheckSquare2,
  ChevronDown,
  CircleGauge,
  FileCheck2,
  Home,
  Network,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { StatusChip } from '../components';
import './axis.css';

interface NavItem {
  icon: LucideIcon;
  label: string;
  count?: number;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    label: 'Operate',
    items: [
      { icon: Home, label: 'Home' },
      { icon: Activity, label: 'Work', count: 18 },
      { icon: CheckSquare2, label: 'Approvals', count: 6 },
      { icon: Bot, label: 'Agents' },
      { icon: Workflow, label: 'Workflows' },
    ],
  },
  {
    label: 'Govern',
    items: [
      { icon: Boxes, label: 'Knowledge' },
      { icon: Network, label: 'Integrations' },
      { icon: ShieldCheck, label: 'Policies' },
      { icon: FileCheck2, label: 'Audit' },
    ],
  },
];

export interface AxisShellProps {
  activeItem?: string;
  children: ReactNode;
}

function NashMark() {
  return (
    <span className="axis-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

export function AxisShell({ activeItem = 'Home', children }: AxisShellProps) {
  return (
    <div className="axis-shell">
      <aside className="axis-sidebar" aria-label="Axis primary navigation">
        <div className="axis-brand">
          <NashMark />
          <span className="axis-brand__name">Nash</span>
          <span className="axis-brand__product">Axis</span>
        </div>

        <button className="axis-tenant" type="button">
          <span className="axis-tenant__avatar">AU</span>
          <span>
            <strong>Acme United</strong>
            <small>Production workspace</small>
          </span>
          <ChevronDown size={15} aria-hidden="true" />
        </button>

        <nav className="axis-nav" aria-label="Axis navigation">
          {navGroups.map((group) => (
            <div className="axis-nav__group" key={group.label}>
              <span className="axis-nav__label">{group.label}</span>
              {group.items.map((item) => {
                const Icon = item.icon;
                const active = item.label === activeItem;
                return (
                  <button
                    aria-current={active ? 'page' : undefined}
                    className={`axis-nav__item ${active ? 'axis-nav__item--active' : ''}`}
                    key={item.label}
                    type="button"
                  >
                    <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                    <span>{item.label}</span>
                    {item.count ? <span className="axis-nav__count">{item.count}</span> : null}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="axis-sidebar__footer">
          <div className="axis-posture">
            <span className="axis-posture__icon"><ShieldCheck size={17} aria-hidden="true" /></span>
            <span><strong>Policy posture</strong><small>All controls healthy</small></span>
            <span className="axis-posture__pulse" aria-hidden="true" />
          </div>
          <button className="axis-nav__item" type="button">
            <Settings2 size={17} aria-hidden="true" />
            <span>Settings</span>
          </button>
        </div>
      </aside>

      <div className="axis-workspace">
        <header className="axis-topbar">
          <label className="axis-search">
            <Search size={16} aria-hidden="true" />
            <span className="axis-visually-hidden">Search Axis</span>
            <input placeholder="Search work, agents, proofs…" type="search" />
            <kbd>⌘ K</kbd>
          </label>
          <div className="axis-topbar__context">
            <StatusChip tone="success" dot>Production</StatusChip>
            <StatusChip tone="info">Customer admin</StatusChip>
            <button className="axis-icon-button" aria-label="Notifications" type="button">
              <Bell size={18} aria-hidden="true" />
              <span className="axis-icon-button__badge">3</span>
            </button>
            <button className="axis-user" aria-label="Open user menu" type="button">MB</button>
          </div>
        </header>
        <main className="axis-main">{children}</main>
      </div>
    </div>
  );
}

export function AxisWelcome() {
  return (
    <div className="axis-welcome">
      <div className="axis-welcome__orb" aria-hidden="true"><Sparkles size={28} /></div>
      <span>Axis ACP</span>
      <h1>Give every agent action a clear owner, boundary and proof.</h1>
      <p>This shell is an exploratory design specimen backed by the Nash Axis admin and ACP contracts.</p>
      <div className="axis-welcome__proof">
        <CircleGauge size={17} aria-hidden="true" />
        Proof completeness <strong>98%</strong>
      </div>
    </div>
  );
}
