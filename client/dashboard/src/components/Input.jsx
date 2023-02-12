import React from 'react';

const Input = ({ id, type, placeholder, value, onChange, name, label }) => {
  return (
    <div className="mb-4">
      <label htmlhtmlFor={id} className="block text-xs font-medium text-gray-700 mb-2">
        {label}
      </label>

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
      />
    </div>
  );
};

export default Input;
