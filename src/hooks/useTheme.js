
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { greenTheme, blueTheme } from "../assets/themes";

const useTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const currentTheme = theme === 'blue' ? blueTheme  : greenTheme ;

    return { theme, toggleTheme, currentTheme };
}

export default useTheme; 