import React from 'react';

const Input = ({ id, type, placeholder, value, onChange, name, label }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
      />
    </div>
  );
};

export default Input;
