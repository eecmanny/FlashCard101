import Flashcard from "../models/Flashcard";
import FCard from "./FCard";

export default function Homepage() {

    return (
        <div>
            {/* this is what we have */}
            <FCard {''} />

            {/* This doesn't give an error */}
            {/* <FCard flashcard={''} /> */}
        </div>
    );
}