import React, { Component } from 'react'

class MessageForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: '',
      user: '',
      value: ''
    }
  }

  handleSubmit(e) {
      e.preventDefault();
      var message = {
          user : this.props.user,
          text : this.state.text
      }
      this.props.onMessageSubmit(message);
      this.setState({ text: '' });
  }

  changeHandler(e) {
    console.log("THIS IS E", e);
      this.setState({ text : e.currentTarget.value });
      console.log(e);
  }

  render() {
      return(
          <div className='message_form'>
              <h4>Write New Message</h4>
              <form onSubmit={this.handleSubmit}>
                  <input
                      onChange={this.changeHandler}
                      value={this.state.text}
                  />
              </form>
          </div>
      );
  }
};

export default MessageForm;
