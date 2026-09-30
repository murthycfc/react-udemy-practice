import { useState } from "react";
import { createContext } from "react";
export const ThemeContext = createContext();

export default function ThemeContextProvider({children}){
    const [theme, setTheme] = useState("light");

    function toggleTheme(){
        setTheme((prevTheme) =>
            prevTheme === "light" ? "dark" : "light"
        );
    }
    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}