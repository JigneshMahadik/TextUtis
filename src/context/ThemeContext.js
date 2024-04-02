import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext(false);

const ThemeContextProvider = ({children}) =>{
    const [darkMode, setDarkMode] = useState(true);
    const contextvalue = {darkMode, setDarkMode};
    return (
        <ThemeContext.Provider value={contextvalue}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;