import React from 'react';
import { TicketCard } from '../../components/Tickets/index';
import { tickets } from '../../data/dummy';

type Props = {};

export const DashBoard = (props: Props) => {
  const uniqueCategorys = [...new Set(tickets?.map(({ category }) => category))];

  return (
    <div className='p-10'>
      <p>Dashboard</p>
      <div className='mt-10'>
        {tickets &&
          uniqueCategorys?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <p>{uniqueCategory}</p>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, index) => (
                  <TicketCard
                  key={index+100}
                  id={index}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};
