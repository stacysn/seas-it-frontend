import React, { Component } from 'react';


class UsersList extends Component{
  render() {
    return (
      <div className='users'>
        <h4> Online Chatting Surfers </h4>
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
