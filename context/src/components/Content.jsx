import {useContext} from "react";
import { ThemeContext } from "./ThemeContext";



export default function Content() {
    const { theme } = useContext(ThemeContext);

    return (
        <main style={{
                minHeight: "300px", padding: "40px",
                backgroundColor: theme === "light" ? "white" : "#333333",
                color: theme === "light" ? "black" : "white"
            }}>
            <h2>React Course</h2>
            <p> Current theme: {theme}</p>
        </main>
    );
}