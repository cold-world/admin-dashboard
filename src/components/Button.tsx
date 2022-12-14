import React from 'react';

type ButtonProps = {
  color: string;
  bgColor: string;
  text: string;
  borderRadius: string;
  size: string;
};

export const Button = ({ color, bgColor, borderRadius, size, text }: ButtonProps) => {
  return (
    <button
      style={{ backgroundColor: bgColor, borderRadius, color }}
      className={`text-${size} py-2 px-3 hover:drop-shadow-xl transition-all active:scale-90`}
      type='button'
    >
      {text}
    </button>
  );
};
