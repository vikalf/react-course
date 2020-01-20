import React from 'react';
import './CharComp.css';

const Char = (props) => {
    return (
        <div className="Char">
            <p onClick={props.clickCharacter}>
                {props.character}
            </p>
        </div>
    );
}

export default Char;