import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'ghost';
  size?: 'icon' | 'default';
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, className, variant = 'primary', size = 'default' }) => {
  const baseStyle = 'rounded-lg font-medium transition-colors focus:outline-none';
  const variantStyles = variant === 'ghost' ? 'bg-transparent hover:bg-gray-100' : 'bg-blue-500 text-white hover:bg-blue-600';
  const sizeStyles = size === 'icon' ? 'p-2' : 'px-4 py-2';

  return (
    <button onClick={onClick} className={`${baseStyle} ${variantStyles} ${sizeStyles} ${className}`}>
      {children}
    </button>
  );
};
