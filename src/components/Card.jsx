import React from 'react'
import Translate_button from './Translate_button'
import styles from './Card.module.css'




function Card() {
    return (
        <div className={styles.card_wrapper}>
            <div className={styles.card}>
                <p className={styles.card_word}>{props.russian}</p>
                <p className={styles.card_transcription}>{props.transcription}</p>

                <Translate_button></Translate_button>

            </div>
        </div >
    )
}

export default Card


