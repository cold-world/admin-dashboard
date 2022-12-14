import React from 'react';
import { FiMenu } from 'react-icons/fi';

type HeaderProps = {
  category: string;
  title: string;
};

export const Header = ({category, title}: HeaderProps) => {
  return (
    <div className='mb-7'>
      <p className='text-gray-400'>{category}</p>
      <p className='text-3xl font-extrabold tracking-tight text-slate-900'>{title}</p>
    </div>
  );
};
