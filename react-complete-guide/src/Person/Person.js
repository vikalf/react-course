import React from 'react';

const person = (props) => {

    return (
        <div>
            <p>I'm  {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
            <button onClick={props.deleteClickHandler}>Delete</button>
        </div>        
    );
}

export default person;