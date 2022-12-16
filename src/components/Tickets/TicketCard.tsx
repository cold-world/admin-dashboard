import React from 'react';
import { Link } from 'react-router-dom';
import {
  AvatarDisplay,
  DeleteBlock,
  PriorityDisplay,
  ProgressDisplay,
  StatusDisplay,
} from './index';

type TicketCardProps = {
  id: number;
  ticket: {
    category: string;
    color: string;
    title: string;
    owner: string;
    avatar: string | null;
    status: string;
    priority: number;
    progress: number;
    description: string;
    timestamp: string;
  };
};

export const TicketCard = ({ ticket }: TicketCardProps) => {
  return (
    <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  p-10 rounded-2xl m-5'>
      <Link
        className='grid grid-cols-6 w-full space-x-5 justify-between items-center'
        to={`/ticket/${ticket.title}`}
      >
        <div></div>
        <h3>{ticket.title}</h3>
        <AvatarDisplay avatar={ticket.avatar} />
        <StatusDisplay status={ticket.status} />
        <PriorityDisplay priority={ticket.priority} />
        <ProgressDisplay progress={ticket.progress} />
      </Link>
        <DeleteBlock />
    </div>
  );
};
