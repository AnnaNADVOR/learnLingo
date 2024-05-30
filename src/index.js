import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import theme from 'assets/theme';
// import GlobalStyles from 'components/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/learnLingo">
        <App />
      </BrowserRouter>
        
   {/* <GlobalStyles/> */}
    </ThemeProvider>
  
  </React.StrictMode>
);
