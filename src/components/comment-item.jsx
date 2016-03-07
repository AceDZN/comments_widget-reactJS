var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return{
      commentClass: this.props.className || "",
      id: this.props.comment.id,
      author: this.props.comment.author,
      content: this.props.comment.content,
    }
  },
  render: function(){
    return (
      <div className={"comment-block "+this.state.commentClass}>
        <div className="comment-avatar">
          <img alt={this.state.author} />
        </div>
        <div className="comment">
          <div className="author">
            {this.state.author}
          </div>
          <p className="content">
            {this.state.content}
          </p>
        </div>
      </div>
    );
  },
  getGravatar: function(){
    return this.state.author
  }
});
