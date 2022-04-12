import { useState } from "react";
//hook => Gancho


export function Counter() {
    const [counter, setCounter] = useState(0);



    function increment() {
        setCounter(counter + 1) //imutabilidade
    }


    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment +1</button>
        </div>
    );
}