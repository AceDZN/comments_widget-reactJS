var React = require('react');
var ReactDOM = require('react-dom');
var NewCommentForm = require('./components/new-comment-form');

var WidgetWrap = React.createClass({
  render: function() {
    return (<div className="widget_wrap">
      <NewCommentForm />
      </div>);
  }
});

var element = React.createElement(WidgetWrap, {});
ReactDOM.render(element, document.querySelector('.main_wrap'));
