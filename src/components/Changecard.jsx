import React, { useState } from 'react';
import Slider from './Slider';
import Card from './Card';
import Styles from './Slider.module.css';


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
            <Slider
                showPrev={showPrev}
                showNext={showNext}
                card={<Card
                    id={words[currentItem].id}
                    english={words[currentItem].english}
                    transcription={words[currentItem].transcription}
                    russian={words[currentItem].russian}
                />}>
            </Slider>
        )
    }
}