
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { yellowTheme, blueTheme } from "../assets/themes";

const useTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const currentTheme = theme === 'yellow' ? yellowTheme  : blueTheme ;

    return { theme, toggleTheme, currentTheme };
}

export default useTheme; 