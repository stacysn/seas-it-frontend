import React, { Component } from 'react';

class Message extends Component{
  render() {
    return (
      <div className="message black teal-text">
          <strong>{this.props.userName} : </strong>
          <span>{this.props.text}</span>
      </div>
    );
  }
}

export default Message;
