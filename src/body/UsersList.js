import React, { Component } from 'react';


class UsersList extends Component{
  render() {
    return (
      <div className='users center'>
        <h4> Online Chatting Surfers </h4>
          <h6> Surfing the Web </h6>
          <h6> Get Chat-sea </h6>
          <ul>
            {this.props.users.map((user, i) => {
              return (
                <li key={i}>
                  {user}
                </li>
              )}
            )}
          </ul>
      </div>
    );
  }
}

export default UsersList;
