var React = require('react');
var ReactDOM = require('react-dom');

var WidgetWrap = React.createClass({
  render: function() {
    return (<div className="widget_wrap">
      NEW COMMENT FORM
      </div>);
  }
});

var element = React.createElement(WidgetWrap, {});
ReactDOM.render(element, document.querySelector('.main_wrap'));
