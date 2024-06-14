import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const CustomThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(
    () => JSON.parse(localStorage.getItem('theme')) ?? 'yellow'
  );

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

    const toggleTheme = () => {
      
      const themes = ['blue', 'green', 'red', 'orange', 'yellow'];
      const randomTheme = themes[Math.floor(Math.random() * themes.length)];

    switch (randomTheme) {
      case 'blue':
        setTheme('blue');
        break;
      case 'green':
        setTheme('green');
        break;
      case 'red':
        setTheme('red');
        break;
      case 'orange':
        setTheme('orange');
        break;
      case 'yellow':
        setTheme('yellow');
        break;
      default:
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, CustomThemeProvider };
