import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setVisible] = useState<boolean>(false);
    return <>
    <div>Reveal Answer: {isVisible && <span>42</span>}</div>
    <Button onClick={()=>{setVisible(!isVisible); console.log(isVisible)}}>Reveal Answer</Button>
    </>
}
