import React from 'react';

export const Input = ({
  value,
  onUpdate,
  placeholder,
  label,
  type = 'text',
}) => {
  if (!onUpdate) throw new Error('Expected to have onUpdate function');
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type={type}
        className="input text"
        value={value}
        onChange={(e) => onUpdate(e.target.value)}
        placeholder={placeholder || ''}
      />
    </div>
  );
};

export const Dropdown = ({ choices, defaultValue, onUpdate, label }) => {
  if (!onUpdate) throw new Error('Expected to have onUpdate function');
  if (!choices || !Array.isArray(choices))
    throw new Error('Expected to have an array of choices');
  return (
    <div className="input-container">
      <label>{label}</label>
      <select
        className="input dropdown"
        onChange={(e) => onUpdate(e.target.value)}
      >
        {choices.map((choice) => (
          <option
            key={choice}
            defaultChecked={choice === defaultValue}
            value={choice}
          >
            {choice}
          </option>
        ))}
      </select>
    </div>
  );
};
