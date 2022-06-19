import React, { useState } from 'react';


function Translate_button() {
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
    }

    return (
        <div className="card_translation">
            {pressed ? <span>мышь</span> :
                <button className="translate-btn" onClick={handleChange}>Перевод</button>}
        </div>
    )
}

export default Translate_button