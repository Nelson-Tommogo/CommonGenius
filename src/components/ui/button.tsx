import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export const Button = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '', 
  disabled,
  ...props 
}: ButtonProps) => {
  
  // Variant styles
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    outline: 'bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300'
  }

  // Size styles
  const sizes = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg'
  }

  // Disabled styles
  const disabledStyles = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : ''

  // Width styles
  const widthStyles = fullWidth ? 'w-full' : ''

  return (
    <button
      {...props}
      disabled={disabled}
      className={`
        font-bold rounded shadow-md hover:shadow-lg transition-all
        ${variants[variant]}
        ${sizes[size]}
        ${disabledStyles}
        ${widthStyles}
        ${className}
      `}
    >
      {children}
    </button>
  )
}