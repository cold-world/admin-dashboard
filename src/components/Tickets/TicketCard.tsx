import { Link } from 'react-router-dom';
import {
  AvatarDisplay,
  PriorityDisplay,
  ProgressDisplay,
  StatusDisplay,
} from './index';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { MdOutlineCancel } from 'react-icons/md';

import { Ticket } from '../../ticket.types';
import axios from 'axios';

type TicketCardProps = {
  id: number;
  ticket: Ticket;
};

export const TicketCard = ({ ticket }: TicketCardProps) => {
  const deleteTicket = async () => {
    const response = await axios.delete(`http://localhost:8000/tickets/${ticket.documentId}`);
    const success = response.status === 200;
    if (success) window.location.reload();
  };
  return (
    <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  p-10 rounded-2xl m-5 relative'>
      <div className='flex'>
        <Link
          className='grid grid-cols-5 w-full space-x-5 justify-between items-center'
          to={`/create-new/${ticket.documentId}`}
        >
          <TooltipComponent content='Ticket name' position='TopCenter'>
            <h3>{ticket.title}</h3>
          </TooltipComponent>
          <AvatarDisplay avatar={ticket.avatar} />
          <TooltipComponent content='Ticket status' position='TopCenter'>
            <StatusDisplay status={ticket.status} />
          </TooltipComponent>
          <TooltipComponent content='Ticket priority' position='TopCenter'>
            <PriorityDisplay priority={ticket.priority} />
          </TooltipComponent>
          <TooltipComponent content='Ticket progress' position='TopCenter'>
            <ProgressDisplay progress={ticket.progress} />
          </TooltipComponent>
        </Link>
      </div>
      {/* <DeleteBlock /> */}
      <button
        onClick={deleteTicket}
        className='text-2xl rounded-full mr-1 mt-1 p-2 block hover:bg-light-gray absolute top-0 right-0'
      >
        <MdOutlineCancel />
      </button>
    </div>
  );
};
