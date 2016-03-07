var React = require('react');
var CommentItem = require('./comment-item');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      comments: this.props.comments || []
    }
  },
  render: function(){
    return this.renderList()
  },
  renderList: function(){
      if(this.props.comments && Object.keys(this.props.comments).length === 0){
        return (
          <div>NONE</div>
        );
      } else {
        var children = [];
        for (var key in this.props.comments ){
          children.push(
            <CommentItem comment={this.props.comments[key]} key={this.props.comments[key].id} />
          )
        }
        return (
          <div className="comments_wrap">
              <div className={"comment-list "+this.setCommentListClass()}>
                {children}
              </div>
          </div>
        );
      }
    },
    setCommentListClass: function(){
      if(this.props.comments.length <=1){
        return "no_list"
      } else {
        return "list"
      }
    }
});
