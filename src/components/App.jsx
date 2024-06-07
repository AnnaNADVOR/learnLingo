import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import { ThemeProvider } from '@emotion/react';
import useTheme from '../hooks/useTheme';
import GlobalStyles from './GlobalStyles';

export const App = () => {
  const { currentTheme } = useTheme();

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/teachers" element={<div>Teachers page</div>} />
          {/* <Route
          index
          element={
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nemo neque ex dolore, nostrum quia est porro delectus
              dolorem laborum, molestias accusamus! Dignissimos nemo hic
              accusantium, perferendis itaque quas eaque.
              <div
                style={{
                  backgroundColor: '#fbe9ba',
                  width: '568px',
                  borderRadius: '30px',
                  height: '530px',
                  position: 'relative',
                }}
              >
                <img
                  src={GirlLogo}
                  alt=""
                  style={{ position: 'absolute', top: '80px', left: '114px' }}
                />
                <img
                  src={MacLogo}
                  alt=""
                  style={{ position: 'absolute', top: '354px', left: '104px' }}
                />
              </div>
            </div>
          }
        /> */}
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
