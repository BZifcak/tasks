import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [QuestionType, setQuestionType] = useState<QuestionType>("short_answer_question");
    function invertType(){
        const inverseType = QuestionType === "short_answer_question"? "multiple_choice_question" : "short_answer_question";
        setQuestionType(inverseType);
    }
   
    return <>
    <div>Change Type</div>
    {QuestionType === "short_answer_question"? <div>Short Answer</div> : <div>Multiple Choice</div>}
    <Button onClick={invertType}>Change Type</Button>
    </>
}
