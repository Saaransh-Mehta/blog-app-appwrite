import React from 'react'

const Button = ({
    children,
    className = '',
    type = 'button',
    textColor = 'text-white',
    ...props
}) => {
  return (
    <button className={`${className}, ${textColor}, px-4 py-2 rounded-lg`} {...props}>
        {children}
    </button>
  )
}

export default Button