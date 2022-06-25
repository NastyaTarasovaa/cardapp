import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import styles from './Slider.module.css';

export default function Slider(props) {
    return (
        <div className={styles.btn_container}>
            <button className={styles.btn_leftright} onClick={props.showPrev}><FaArrowLeft /></button>

            <div>{props.card}</div>

            <button className={styles.btn_leftright} onClick={props.showNext}><FaArrowRight /></button>

        </div>
    )
}