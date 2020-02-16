import React from 'react';

const Friend = props => {
    return(
      <div className='note'>
        <h2>Name: {props.friend.name}</h2>
        <p>Age: {props.friend.age}</p>
        <p>E-mail: {props.friend.email}</p>
        <button onClick={props.removeFriend}>Remove</button>
      </div>
    );
}

export default Friend;