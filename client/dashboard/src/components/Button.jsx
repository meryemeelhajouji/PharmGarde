import React from 'react';

const Button = ({ type, onClick, content }) => {
  return (
    <button
      type={type}
      className="w-full inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
