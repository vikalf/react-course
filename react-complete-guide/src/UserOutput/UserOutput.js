import React from 'react';

const userOutput = (props) => {
    return (
    <div className="UserOutput">
        <p>{props.children}</p>
    <p>{props.username}</p>
    </div>
    );
}

export default userOutput;