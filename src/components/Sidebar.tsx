import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';
import { IconType } from 'react-icons/lib';
import { links } from '../data/dummy';


type Props = {};

export const Sidebar = (props: Props) => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const closeSidebarForMobile = () => {
    if (window.innerWidth <= 900) setActiveMenu(false);
  };
  const activeLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-blue capitalize';
  const normalLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black capitalize hover:bg-light-gray m-2';
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <div className='flex flex-col justify-between'>
          <div className='flex items-baseline justify-between'>
            <Link
              onClick={closeSidebarForMobile}
              className='flex gap-3 items-center mt-4 ml-3 text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
              to='/'
            >
              <SiShopware />
              <span>Shoppy</span>
            </Link>
            <TooltipComponent
              onClick={() => setActiveMenu(false)}
              content='Menu'
              position='BottomCenter'
            >
              <button className='text-xl rounded-full mr-4 mt-2 p-2 block hover:bg-light-gray md:hidden'>
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className='mt-10'>
            {links.map((link) => (
              <div key={link.title}>
                <h4 className='text-gray-400 m-3 uppercase'>{link.title}</h4>
                {link.links.map((item) => (
                  <NavLink
                    onClick={closeSidebarForMobile}
                    key={item.name}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    to={`/${item.name}`}
                  >
                    {item.icon}
                    {item.name}
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
