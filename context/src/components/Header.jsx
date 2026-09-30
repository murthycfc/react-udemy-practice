import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <div style={{
                padding: "20px",
                backgroundColor: theme === "light" ? "#eeeeee" : "#222222",
                color: theme === "light" ? "#222222" : "white"
            }} >
            <h1>My Website</h1>

            <button onClick={toggleTheme}>
                Change Theme
            </button>
        </div>
    )

}