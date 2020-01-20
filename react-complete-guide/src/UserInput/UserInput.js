import React from 'react';

const userInput = (props) => {
    return (
    <div className="UserInput">
        <input className="input" type="text" onChange={props.changeUsername} value={props.username}></input>
    </div>
    );
}

export default userInput;