import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component{
  render() {
    return (
      <div className='messages'>
          <h5> Conversation: </h5>
          {this.props.messages.map((message, i) => {
              return (
                  <Message key={i} user={message.user} text={message.text}  />
              );
            })
          }
      </div>
    );
  }
};

export default MessageList;
