import { useState, useEffect } from 'react';
import { TicketCard } from '../../components/Tickets/index';
// import { tickets } from '../../data/dummy';
import axios from 'axios';
import { Header } from '../../components';
import { Ticket } from '../../ticket.types';
import { useStateContext } from '../../contexts/ContextProvider';

type Props = {};

export const DashBoard = (props: Props) => {
  const { setCategories } = useStateContext();
  const [tickets, setTickets] = useState<Ticket[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8000/tickets');
      const dataObj = response.data.data;
      const arrOfKeys = Object.keys(dataObj);
      const arrOfData = Object.keys(dataObj).map((key) => dataObj[key]);
      const formattedArray: Ticket[] = [];
      arrOfKeys.forEach((key, index) => {
        const formattedData = { ...arrOfData[index] };
        formattedData['documentId'] = key;
        formattedArray.push(formattedData);
      });

      setTickets(formattedArray);
    };
    fetchData();
  }, []);
  useEffect(() => {
    setCategories([...new Set(tickets?.map(({ category }) => category))]);
  }, [setCategories, tickets]);
  const uniqueCategories = [...new Set(tickets?.map(({ category }) => category))];

  return (
    <div className='p-10'>
      <Header category='Tickets' title='Current' />

      <div className='mt-10'>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <p className='bg-orange-200 rounded-full inline-block p-2'>{uniqueCategory}</p>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, index) => (
                  <TicketCard key={index + 100} id={index} ticket={filteredTicket} />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};
