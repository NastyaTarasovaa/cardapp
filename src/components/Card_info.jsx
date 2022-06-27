import React from "react";
import Card from './components/Card';


function Card_info({ words }) {

    return (
        <div>
            {
                words.map((word) => (
                    <Card key={word.id} english={word.english} transcription={word.transcription} russian={word.russian} />
                ))}
        </div>
    )
}

export default Card_info