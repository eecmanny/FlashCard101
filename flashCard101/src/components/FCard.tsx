import Flashcard from "../models/Flashcard";
import { useState } from "react";

interface Props {
    flashcard: Flashcard;
}

const Card = ({ flashcard }: Props) => {
    const [flip, setFlip] = useState(false);

    // Click handler when user clicks on card to flip it
    const handleClick = (e: any) => {
        setFlip(!flip);
    };

};


export default function FCard({ flashcard }: { flashcard: Flashcard }) {
    const [flip, setFlip] = useState(false);
    <div className={'card ${flip ? "flip" : ""}'}>
        <div className="front" onClick={() => setFlip(!flip)}>
        </div>
        <div className="back" onClick={() => setFlip(!flip)}>

        </div>
        <div>

{/* {flip ? flashcard.answer : flashcard.question} */}

        </div>

    </div>
}