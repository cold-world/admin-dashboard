import React from 'react';
import { AiFillStar } from 'react-icons/ai';

type PriorityDisplayProps = {
  priority: number;
};

export const PriorityDisplay = ({ priority }: PriorityDisplayProps) => {
  const arrayFromNumber = [...Array(priority).keys()];
  return (
    <div className='flex space-x-4 items-center justify-center'>
      {arrayFromNumber.map((item) => (
        <AiFillStar key={item} className='text-amber-300 text-xl' />
      ))}
    </div>
  );
};
