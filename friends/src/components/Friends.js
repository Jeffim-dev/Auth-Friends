import React from 'react';

const Friend = props => {
    return(
        <>
        <h2>Name: {props.friend.name}</h2>
        <p>Age: {props.friend.age}</p>
        <p>E-mail: {props.friend.email}</p>
        </>
    );
}

export default Friend;