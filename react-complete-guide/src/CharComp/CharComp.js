import React from 'react';
import './CharComp.css';

const Char = (props) => {
    
    const classes = props.classes.join(' ');

    return (
        <div className={classes}>
            <p onClick={props.clickCharacter}>
                {props.character}
            </p>
        </div>
    );
}

export default Char;