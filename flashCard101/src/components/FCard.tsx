import Flashcard from "../models/Flashcard";
import { useState } from "react";

// export default function FCard({ flashcard }: { flashcard: Flashcard }) {
//     const [showAnswer, setShowAnswer] = useState(false);

//     return (
//         <div>
//             <div>
//                 <h2>{flashcard.question}</h2>
//                 <button onClick={() => setShowAnswer(!showAnswer)}>Show Answer</button>
//             </div>
//             {showAnswer && <div>{flashcard.answer}</div>}
//         </div>
//     );
// }

export default function FCard({ flashcard }: { flashcard: Flashcard }) {
    const [flip, setFlip] = useState(false);
    <div>
        <div>

{flip ? flashcard.answer : flashcard.question}

        </div>

    </div>
}