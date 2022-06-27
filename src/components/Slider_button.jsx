import CardStyles from './Card.module.css';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export default function Slider_button(props) {
    return (
        <div className={CardStyles.button_box}>
            <button className={CardStyles.button_leftright} onClick={props.showPrev}><FaArrowLeft /></button>

            <div>{props.card}</div>

            <button className={CardStyles.button_leftright} onClick={props.showNext}><FaArrowRight /></button>

            <div>Выучено слов: {props.count}</div>

        </div>

    )
}

