import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/Store'; // Make sure to import your Redux store

createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Pass the store prop */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
