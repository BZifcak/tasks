import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface Callback{
    Funky : ()=>void
}

function Doubler({Funky}: Callback): React.JSX.Element {
    return (
    <Button onClick={Funky}>Double</Button>
    );
}

function Halver({Funky }: Callback): React.JSX.Element {
    return (
        <Button
            onClick={Funky}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <p>Double Half</p>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler Funky={()=>{setDhValue(2 * dhValue)}}></Doubler>
            <Halver Funky={()=>{setDhValue(0.5 * dhValue)}}></Halver>
        </div>
    );
}
