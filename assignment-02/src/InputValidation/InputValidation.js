import React from 'react'

const inputValidation = (props) => {

    const minLength = 5;
    let output = 'Ok';

    if(props.inputLength < minLength)
        output = 'Text too short!';
    else if (props.inputLength > minLength)
        output = 'Text too long!';

    return (
        <div>
            <span>{output}</span>
        </div>
    );


}

export default inputValidation;