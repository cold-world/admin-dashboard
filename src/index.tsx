import { createRoot } from 'react-dom/client';
import './index.css';
import './tailwind.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
