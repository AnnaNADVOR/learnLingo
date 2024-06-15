import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { CustomThemeProvider } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <BrowserRouter basename="/learnLingo">        
        <App />
      </BrowserRouter>
    </CustomThemeProvider>
  </React.StrictMode>
);
