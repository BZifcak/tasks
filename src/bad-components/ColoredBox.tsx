import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({Callback}:{Callback:()=>void}): React.JSX.Element {
    
    return (
        <Button
            onClick={Callback}>
            Next Color
        </Button>
    );
}

function ColorPreview({colorIndex}:{colorIndex:number}): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <p>Colored Box</p>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor Callback={() => {
                setColorIndex((1 + colorIndex) % COLORS.length);}}></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
