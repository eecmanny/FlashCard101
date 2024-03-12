import Flashcard from "../models/Flashcard";
import FCard from "./FCard";

export default function Homepage() {


    return (
        <div>
            <h1>FlashCard 101</h1>
            <p>Question:</p>
            {/* this is what we have */}
            {/* <FCard {''} /> */}
            {/* <FCard { Flashcard = flashcard }/> */}
            {/* This doesn't give an error */}
            {/* <FCard flashcard={''} /> */}
            {/* <FCard question = {Flashcard.question}/> */}
        </div>
    );
}