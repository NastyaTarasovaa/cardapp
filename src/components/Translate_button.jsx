import React, { useState } from 'react';



function Translate_button(props) {
    const words = [
        { id: 1, english: "street", transcription: "[stri:t]", russian: "улица" },
        { id: 2, english: "car", transcription: "[kɑ:]", russian: "автомобиль" },
        { id: 3, english: "arm", transcription: "[ɑ:m]", russian: "рука" },
        { id: 4, english: "air", transcription: "[eər]", russian: "воздух" },
        { id: 5, english: "fox", transcription: "[fɒks]", russian: "лиса" },
        { id: 6, english: "rabbit", transcription: "[ˈræbɪt ]", russian: "кролик" },
        { id: 7, english: "mouse", transcription: "[maʊs]", russian: "мышь" },
        { id: 8, english: "tea", transcription: "[tiː]", russian: "чай" },
        { id: 9, english: "goose", transcription: "[ɡuːs]", russian: "гусь" },
        { id: 10, english: "flower", transcription: "[ˈflaʊər]", russian: "цветок" },
        { id: 11, english: "bird", transcription: "[be:d]", russian: "птица" },
        { id: 12, english: "cat", transcription: "[kæt]", russian: "кот" },
    ];
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
    }

    return (
        <div className="card_translation">
            {pressed ? <span>{props.russian}</span> :
                <button className="translate-btn" onClick={handleChange}>Перевод</button>}
        </div>
    )
}

export default Translate_button