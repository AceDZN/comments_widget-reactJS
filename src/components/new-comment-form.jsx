var React = require('react');
var CommentsStore = require('../stores/comments-store');



var defaultState = {
  email: '',
  message: '',
  emailClass: '',
  messageClass: '',
  submitDisabled: true,
  emailValid: false,
  messageValid: false
};
module.exports = React.createClass({
  getInitialState: function(){
    return defaultState;
  },
  render: function(){
    return (
      <form className="add-comment" onSubmit={this.handleSubmit} name="commentForm" noValidate="novalidate" >
        <input value={this.state.email} className={this.state.emailClass} type="email" placeholder="Email" onChange={this.handleEmailChange} />
        <textarea value={this.state.message} className={this.state.messageClass} placeholder="Message" onChange={this.handleMessageChange}>
        </textarea>
        <button className="submit" type="submit" disabled={this.state.submitDisabled}>Submit</button>
        <div className="clear"></div>
      </form>
    );
  },
  validateEmail: function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
  isEmpty: function(str) {
    return (!str || 0 === str.length);
  },
  handleEmailChange: function(event){
    this.setState({
      email: event.target.value
    });
    if (!this.isEmpty(event.target.value) && this.validateEmail(event.target.value)){
      this.setState({emailClass: "valid",emailValid: true}, function () {
        this.checkFormValidity();
      });
    } else {
      this.setState({emailClass: "invalid",emailValid: false}, function () {
        this.checkFormValidity();
      });
    }
  },
  handleMessageChange: function(event){
    this.setState({
      message: event.target.value
    });
    if (!this.isEmpty(event.target.value)){
      this.setState({messageClass: "valid",messageValid: true}, function () {
        this.checkFormValidity();
      });
    } else {
      this.setState({messageClass: "invalid",messageValid: false}, function () {
        this.checkFormValidity();
      });
    }
  },
  checkFormValidity: function(){
    if(this.state.emailValid && this.state.messageValid){
      this.setState({submitDisabled: false});
    } else {
      this.setState({submitDisabled: true});
    }
  },
  handleSubmit: function(e){
    e.preventDefault();
    CommentsStore.AddComment({
      email:this.state.email,
      message: this.state.message
    });
    this.props.onCommentAdd();
    this.setState(defaultState);
  }
});
