import { useState } from "react";
import Output from "./Output";
const Greeting = () => {
    const [changedText, setChangedText] = useState(false);

    function handleClick(){
        setChangedText(true);
    }

    return <div>
        <h3>Hello world!</h3>
        {!changedText && <Output>Before</Output>}
        {changedText && <Output>After</Output>}
        <button onClick={handleClick}>Change</button>
    </div>
}
export default Greeting;