var React = require('react');
var ReactDOM = require('react-dom');


var CommentsStore = require('./stores/comments-store');
var NewCommentForm = require('./components/new-comment-form');
var CommentsList = require('./components/comments-list');

var AceLogo = require('./components/ace-logo');

var defaultComments = [
  {id: 1,author: "design@acedzn.com",content: "Hola Amigoz, this is my ReactJS Comment widget"},
  {id: 2,author: "alex@acedzn.com",content: "Hello there. How are you?"},
  {id: 3,author: "another@brother.io",content: "Good!!!"},
  {id: 4,author: "design@acedzn.com",content: "Goodbye :)"}
];

var WidgetWrap = React.createClass({
  getInitialState: function(){
    return {
      comments: CommentsStore.SetComments(defaultComments)
    }
  },
  render: function() {
    return (
      <div>
        <div className="widget_wrap">
          <NewCommentForm onCommentAdd={this.onCommentAdd} />
          <CommentsList comments={this.state.comments} />
        </div>
        <AceLogo />
      </div>

    );
  },
  onCommentAdd: function(){
    this.setState({
      comments: CommentsStore.GetComments()
    })
  }
});

var element = React.createElement(WidgetWrap, {});
ReactDOM.render(element, document.querySelector('.main_wrap'));
