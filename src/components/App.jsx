import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import TeachersPage from 'pages/TeachersPage/TeachersPage';
import { ThemeProvider } from '@emotion/react';
import useTheme from '../hooks/useTheme';
import GlobalStyles from './GlobalStyles';

export const App = () => {
  const { currentTheme, theme } = useTheme();

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage selectedTheme={theme} />} />
          <Route path="/teachers" element={<TeachersPage/>}/>
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
