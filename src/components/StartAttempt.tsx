import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [inProgress, setProgress] = useState<boolean>(false);
    const [attemptsCount, setAttemptsCount] = useState<number>(4);
    return <>
    <div>Start Attempt</div>
    <div>Number of attempts: {attemptsCount}</div>
    {inProgress &&  <div>Quiz in progress</div>}
    <Button onClick={()=>{setProgress(!inProgress);setAttemptsCount(attemptsCount-1)}} disabled={inProgress || attemptsCount <= 0}>Start Quiz</Button>
    <Button onClick={()=>{setProgress(!inProgress);}} disabled={!inProgress}>Stop Quiz</Button>
    <Button onClick={()=>{setAttemptsCount(1+attemptsCount)}}disabled={inProgress}>Mulligan</Button>

    </>
}
