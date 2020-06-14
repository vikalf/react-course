import React from 'react'
import './CharComponent.css';

const charComponent = (props) => {
return <div className="CharComponent" onClick={() => props.clickHandler(props.id)}>{props.letter}</div>
};

export default charComponent;