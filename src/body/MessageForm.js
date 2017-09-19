import React, { Component } from 'react'

class MessageForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: '',
      value: ''
    }
  }

  handleSubmit = (e) => {
      e.preventDefault();
      var message = {
          text : this.state.text
      }
      this.props.onMessageSubmit(message);
      this.setState({ text: '' });
  }

  changeHandler = (e) => {
    console.log("THIS IS E", e);
      this.setState({ text : e.target.value });
      console.log("THIS", this);
      console.log(e);
  }

  render() {
      return(
          <div className='message_form black teal-text center'>
              <h5>Write New Message </h5>
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
