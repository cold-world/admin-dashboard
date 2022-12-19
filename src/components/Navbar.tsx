import React, { ReactNode } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { useStateContext } from '../contexts/ContextProvider';

type NavButtonProps = {
  name: string;
  children: ReactNode;
  color: string;
  dotColor?: string;
  someFunction: () => void;
};

const NavButton = ({
  name,
  children,
  someFunction,
  color,
  dotColor,
}: NavButtonProps): JSX.Element => {
  return (
    <nav>
      <TooltipComponent content={name} position='BottomCenter'>
        <button
          className='relative text-xl rounded-full p-3 hover:bg-ligth-gray'
          style={{ color }}
          type='button'
          onClick={someFunction}
        >
          <span
            className='absolute inline-flex rounded-full h-2 w-2 rigth-2 top-2'
            style={{ background: dotColor }}
          ></span>
          {children}
        </button>
      </TooltipComponent>
    </nav>
  );
};

type Props = {};

export const Navbar = (props: Props) => {
  const {
    setActiveMenu,
    setActiveCart,
    setActiveChat,
    setActiveNotification,
    setActiveUserProfile,
    currentColor,
  } = useStateContext();
  return (
    <nav className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
        name='Menu'
        children={<AiOutlineMenu />}
        color= {currentColor}
        someFunction={() => setActiveMenu((prev) => !prev)}
      />
      <div className='flex items-center gap-3'>
        <NavButton
          name='Cart'
          children={<FiShoppingCart />}
          color={currentColor}
          someFunction={() => setActiveCart((prev) => !prev)}
        />
        <NavButton
          name='Chat'
          children={<BsChatLeft />}
          color={currentColor}
          someFunction={() => setActiveChat((prev) => !prev)}
          dotColor='#03C9D7'
        />
        <NavButton
          name='Notification'
          children={<RiNotification3Line />}
          color={currentColor}
          someFunction={() => setActiveNotification((prev) => !prev)}
          dotColor='#FEC90F'
        />
        <TooltipComponent content='Profile' position='BottomCenter'>
          <div
            onClick={() => setActiveUserProfile((prev) => !prev)}
            className='flex items-center gap-2 cursor-pointer p-1'
          >
            <img className='rounded-full w-8' src={avatar} alt='profile' />
            <span className='text-gray-400 text-14'>Hi, </span>
            <span className='font-bold ml-1 text-14 text-gray-400'>Michael</span>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>
      </div>
    </nav>
  );
};
