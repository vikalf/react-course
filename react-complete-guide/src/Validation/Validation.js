import React from 'react';

const validation = (props) => {

    const lenght = props.charLenght;

    let output = '';

    if (lenght <= 5) {
        output = 'Text too shot';
    } else {
        output = 'Text too long';
    }

    return (
        <div>
            {output}
        </div>
    );
}

export default validation;