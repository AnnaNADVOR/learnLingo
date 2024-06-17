import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import {
  yellowTheme,
  blueTheme,
  redTheme,
  orangeTheme,
  greenTheme,
} from '../assets/themes';

const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  let currentTheme;
  switch (theme) {
    case 'blue':
      currentTheme = blueTheme;
      break;
    case 'yellow':
      currentTheme = yellowTheme;
      break;
    case 'green':
      currentTheme = greenTheme;
      break;
    case 'orange':
      currentTheme = orangeTheme;
      break;
    case 'red':
      currentTheme = redTheme;
      break;
    default: currentTheme = yellowTheme;
      break;
  }

  return { theme, currentTheme, toggleTheme };
};

export default useTheme;
