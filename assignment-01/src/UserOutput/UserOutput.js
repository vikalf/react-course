import React from 'react';

const UserOutput = props => {

    return (
        <div>
            <p>UserName: {props.username}</p>
            <p>{props.children}</p>
        </div>
    );
};

export default UserOutput;

