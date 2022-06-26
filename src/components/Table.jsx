import { React, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FaMarker } from 'react-icons/fa';
import TableStyles from './Table.module.css';


function Table(props) {
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

    const [isEdit, setIsEdit] = useState(true);

    const handleIsEdit = () => {
        setIsEdit(!isEdit)
    }

    let res = words.map(function (item) {
        return <tr className={TableStyles.Table}>
            <td>{item.id}</td>
            <td>{item.english}{isEdit ? props.english : <input type="text"
                value={props.english} onChange={() => { console.log(props.english) }} />}</td>
            <td>{item.transcription}{isEdit ? props.transcription :
                <input type="text"
                    value={props.transcription}
                    onChange={() => { console.log(props.transcription) }} />}</td>
            <td>{item.russian}{isEdit ? props.russian : <input type="text"
                value={props.russian}
                onChange={() => { console.log(props.russian) }}
            />}</td>
            <td>
                <button className={isEdit ? TableStyles.btn_edit : TableStyles.btn_edit__save} onClick={handleIsEdit}>{isEdit && <FaMarker />}{!isEdit && "Сохранить"}</button>
                {isEdit && <button className={TableStyles.btn_delete}><FaTrashAlt /></button>}
            </td>
        </tr >

    });

    return <table >
        <thead>
            <tr>
                <td>№</td>
                <td>Слово</td>
                <td>Транскрипция</td>
                <td>Перевод</td>
                <td>Действия</td>


            </tr>
        </thead>
        <tbody>
            {res}

        </tbody>
    </table>;

}
export default Table

