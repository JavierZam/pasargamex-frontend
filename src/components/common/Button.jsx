import React from 'react';

function Button({ children, type = 'button', onClick, disabled, className = '', color = 'red', fullWidth = false }) {
  const baseStyle = "px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pgx-dark-surface transition-colors duration-150 ease-in-out";
  
  let colorStyle = '';
  if (color === 'red') {
    colorStyle = "bg-pgx-red hover:bg-pgx-red/90 focus:ring-pgx-red";
  } else if (color === 'blue') {
    colorStyle = "bg-pgx-blue hover:bg-pgx-blue/90 focus:ring-pgx-blue";
  }

  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = "bg-gray-500 cursor-not-allowed opacity-70";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${disabled ? disabledStyle : colorStyle} ${widthStyle} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;