import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Friends from './Friends';
import FriendForm from './FriendForm';


class FriendList extends React.Component {
  state = {
    friends: [ {id: '',
      name: '',
      age: '',
      email: '' } ]
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
      .post('/friends', friend)
      .then(res => {
        this.getData();
      })
      .catch(err => {
          console.log(err);
      });
  }

  removeFriend = () => {
    const id = this.state.friends.id
    axiosWithAuth()
      .delete(`/friends/${id}`)
      .then(res => {
        console.log(res)
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
              <div className="list">
                {this.state.friends.map(friend => {
                    return <Friends key={friend.id} friend={friend} removeFriend={this.removeFriend}/>
                })}
              </div>
          </div>
      );
  }
}

export default FriendList;
