import React, { Fragment, useState } from "react";
import CardStyles from './Card.module.css';
import Slider_button from "./Slider_button";




function Card(props) {

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


    const [button, isClickButton] = useState(false)
    const [count, setCount] = useState(0)

    const handleClick = () => {
        isClickButton(!button)
        setCount(count + 1)
    };

    const handleClick2 = () => {
        isClickButton(!button)
    };

    return (
        <Fragment>
            <div>
                <Slider_button></Slider_button>
            </div>
            <div className={CardStyles.card_wrapper}>
                <div className={CardStyles.card}>
                    <div className={CardStyles.card_word}>{props.english}</div>
                    <div className={CardStyles.card_transcription}>{props.transcription}</div>
                </div>

                <div className={CardStyles.card_translation}>
                    {button ? <button onMouseLeave={handleClick2} className={CardStyles.button_edit__show}>{props.russian}</button> : <button onMouseOver={handleClick} className={CardStyles.button_edit__inspect}>Проверить</button>}
                </div>
            </div>
            <div>Выучено слов: {count}</div>
        </Fragment>

    )
}

export default Card