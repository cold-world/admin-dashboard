import { HashRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';
import { Sidebar, ThemeSettings, Navbar } from './components';
import {
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  Editor,
  Line,
  Pyramid,
  Calendar,
  Ecommerce,
  Employee,
  Stacked,
  Orders,
} from './pages';
import { useStateContext } from './contexts/ContextProvider';
import { DashBoard } from './pages/Tickets/DashBoard';
import { TicketPage } from './pages/Tickets/TicketPage';

const App = (): JSX.Element => {
  const { activeMenu, setThemeSettings, themeSettings, currentMode, currentColor } =
    useStateContext();
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <HashRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content='Settings' position='TopCenter'>
              <button
                style={{ background: currentColor, borderRadius: '50%' }}
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white transition-all'
                type='button'
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed dark:bg-secondary-dark-bg sidebar bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>w-0</div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? 'md:ml-72' : 'flex-2'
            }`}
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* Dashboard */}
                <Route path='/' element={<Ecommerce />} />
                <Route path='/ecommerce' element={<Ecommerce />} />
                {/* Tickets */}
                <Route path='/current' element={<DashBoard />} />
                <Route path='/create-new' element={<TicketPage editMode={false}  />} />
                <Route path='/create-new/:id' element={<TicketPage editMode={true} />} />
                {/* Pages */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employee />} />
                <Route path='/customers' element={<Customers />} />
                {/* Apps */}
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                {/* Charts */}
                <Route path='/line' element={<Line />} />
                <Route path='/area' element={<Area />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/financial' element={<Financial />} />
                <Route path='/pyramid' element={<Pyramid />} />
                <Route path='/stacked' element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
