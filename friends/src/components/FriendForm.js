import React, { useState } from 'react';

const FriendForm = (props) => {
    const [newFriend, setNewFriend] = useState({
        id: Date.now(),
        name: '',
        age: '',
        email: ''
    });

     const SubmitForm = e => {
        e.preventDefault();
        props.addFriend(newFriend);
        setNewFriend({ id: '', name: '', age: '', email: ''})
    };

    const handleChanges = e => {
        setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <form onSubmit={SubmitForm}>
            <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChanges}
                value={newFriend.name} 
              />
               <label htmlFor="age">Age</label>
              <input
                type="text"
                name="age"
                onChange={handleChanges}
                value={newFriend.age} 
              />
               <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                onChange={handleChanges}
                value={newFriend.email} 
              />
                <button type='submit'>Add Smurf</button>
            </form>
        </div>
    );
};

export default FriendForm;