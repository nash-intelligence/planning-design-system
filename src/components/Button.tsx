import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './components.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
  trailingIcon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md';
}

export function Button({
  children,
  className = '',
  icon,
  trailingIcon,
  size = 'md',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`nash-button nash-button--${variant} nash-button--${size} ${className}`.trim()}
      type={type}
      {...props}
    >
      {icon ? <span className="nash-button__icon" aria-hidden="true">{icon}</span> : null}
      <span>{children}</span>
      {trailingIcon ? <span className="nash-button__icon" aria-hidden="true">{trailingIcon}</span> : null}
    </button>
  );
}
