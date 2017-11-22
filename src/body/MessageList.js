import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
  render() {
    return (
      <div className='messages black teal-text center'>
        <h4> Conversation: </h4>
        {
          this.props.messages.map((message, i) => {
            return (
              <Message key={i} userName={message.userName} text={message.text}  />
            );
          })
        }
      </div>
    );
  }
}

export default MessageList;
