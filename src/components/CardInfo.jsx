import React from "react";
import styles from './Table.module.css';
import WordInfo from './components/WordInfo';




function CardInfo(props) {

    return (

        <div className={styles.Table}>
            {
                props.words.map((word) => (
                    <WordInfo id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} />
                ))}
        </div>
    )
}

export default CardInfo