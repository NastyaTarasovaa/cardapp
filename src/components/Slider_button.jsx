import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import styles from './Slider_button.module.css';

export default function Slider_button(props) {
    return (
        <div className={styles.btn_container}>
            <button className={styles.btn_leftright} onClick={props.showPrev}><FaArrowLeft /></button>
            <button className={styles.btn_leftright} onClick={props.showNext}><FaArrowRight /></button>

        </div>
    )
}

export default function CardSlider({ words }) {

    const [currentItem, setPosition] = useState(0);

    const showNext = () => {
        setPosition(currentItem + 1);
    }

    const showPrev = () => {
        if (currentItem > 0)
            setPosition(currentItem - 1);
    }

    if (currentItem >= words.length) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.end}>Вы выучили все слова!</div>
            </div>
        )
    } else {
        return (
            <Slider_button>
                showPrev = {showPrev}
                showNext = {showNext}
                card = {< Card
                    id={words[currentItem].id}
                    english={words[currentItem].english}
                    transcription={words[currentItem].transcription}
                    russian={words[currentItem].russian}
                />}
            </Slider_button >
        )
    }
}