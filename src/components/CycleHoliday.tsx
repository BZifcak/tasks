import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holiday = "🎅" | "🎃" | "🦃" | "🐣" | "🎆";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎅");    
    const nextAlphabetical : Record<Holiday,Holiday>= {
        "🎅" : "🐣",
        "🐣" : "🎃",
        "🎃" : "🦃",
        "🦃" : "🎆",
        "🎆" : "🎅" };
    const nextChronological :Record<Holiday,Holiday> ={
        "🐣" : "🎆",
        "🎆" : "🎃",
        "🎃" : "🦃",
        "🦃" : "🎅",
        "🎅": "🐣"};
    return <>
    <div>Cycle Holiday</div>
    <div>Holiday: {holiday}</div>
    <Button onClick={()=>{setHoliday(nextAlphabetical[holiday])}}>Advance by Alphabet</Button>
    <Button onClick={()=>{setHoliday(nextChronological[holiday])}}>Advance by Year</Button>
    </>
}
