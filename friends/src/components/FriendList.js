import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Friends from './Friends';
import FriendForm from './FriendForm';


class FriendList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  addFriend = friend => {
    axiosWithAuth()
      .post('friends', friend)
      .then(res => {
        this.getData();
      })
      .catch(err => {
          console.log(err);
      });
}

render(){
    return(
        <div>
            <FriendForm addFriend={this.addFriend} />
            {this.state.friends.map(friend => {
                return <Friends key={friend.id} friend={friend}/>
            })}
        </div>
    );
}
}

export default FriendList;
