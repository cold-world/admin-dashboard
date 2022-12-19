import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Button, SparkLine, EcommerceHeroCard } from '../components';
import { earningData, SparklineAreaData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

type Props = {};

export const Ecommerce = (props: Props): JSX.Element => {
  const { currentColor } = useStateContext();
  return (
    <div className='md:mt-5 mt-16'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='p-8'>
          <p className='font-bold text-gray-400'>Earnings</p>
          <p className='text-2xl dark:text-white'>$63,448.78</p>
          <div className='mt-3'>
            <Button
              bgColor={currentColor}
              text='Download'
              borderRadius='10px'
              size='md'
              color='white'
            />
          </div>
        </div>
        <div
          className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl 
        w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'
        ></div>
        <div className='m-3 flex gap-1 items-center justify-center flex-wrap'>
          {earningData.map((card: any) => (
            <EcommerceHeroCard
              key={card.title}
              icon={card.icon}
              amount={card.amount}
              iconBg={card.iconBg}
              iconColor={card.iconColor}
              pcColor={card.pcColor}
              percentage={card.percentage}
              title={card.title}
            />
          ))}
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-xl md:w-780 p-5'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Ravenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex flex-wrap gap-10 justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,438</span>
                  <span className='p-1.5 cursor-pointer hover:drop-shadow-xl rounded-full bg-green-400 ml-3 text-white '>
                    23%
                  </span>
                </p>
                <p className='text-gray-400 mt-1'>Budget</p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$48,487</span>
                </p>
                <p className='text-gray-400 mt-1'>Expense</p>
              </div>
              <div className='mt-5'>
                <SparkLine
                  currentColor={currentColor}
                  id='sparkline'
                  type='Line'
                  heigth='80px'
                  width='250px'
                  data={SparklineAreaData}
                  color='blue'
                />
              </div>
              <div className='mt-10'>
                <Button
                  color='white'
                  bgColor={currentColor}
                  borderRadius='10px'
                  text='Download'
                  size='md'
                />
              </div>
            </div>
            <div>
              <Stacked width='320px' heigth='360' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
