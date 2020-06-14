import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="person">
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>        
            <input type="text" onChange={props.changed} value={props.name}></input>
            <button className="person-delete-btn" onClick={props.click}>Delete</button>
        </div>
    )};

export default person;