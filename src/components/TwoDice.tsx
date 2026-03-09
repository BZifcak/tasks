import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rigthDie, setRightDie] = useState<number>(6);
  return <>
    <div>Two Dice</div>
    <div>Left die number: <span data-testid = "left-die">{leftDie}</span> Right die number: <span data-testid = "right-die">{rigthDie}</span></div>
    {leftDie === rigthDie && leftDie === 1 && <div style={{padding : "10px", color: "red"}}>You Lose</div>}
    {leftDie === rigthDie && leftDie !== 1 &&<div style={{padding : "10px", color :"green"}}>You Win</div>}
    <Button onClick={()=>{setLeftDie(d6())}}>Roll Left</Button>
    <Button onClick={()=>{setRightDie(d6())}}>Roll Right</Button>
    </>;
}
