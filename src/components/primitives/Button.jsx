import React from 'react';

const Button = ({ label, action, type = 'button', disabled, className }) => {
  if (type === 'submit') {
    return (
      <input
        type="submit"
        className={`btn generic ${className}`}
        value={label || 'Submit'}
        disabled={disabled}
      />
    );
  }

  if (!action) throw new Error('Button should have an Action function');
  return (
    <button
      className={`btn generic ${className}`}
      onClick={() => action()}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
