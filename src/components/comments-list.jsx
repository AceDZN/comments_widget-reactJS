var React = require('react');
var CommentItem = require('./comment-item');
var FilterBlock = require('./filter-block');
var NoResults = require('./no-results');
var CommentsStore = require('../stores/comments-store');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      comments: this.props.comments || []
    }
  },
  render: function(){
    return this.renderWrapper()
  },
  renderWrapper: function(){
    if(this.state.comments && Object.keys(this.state.comments).length === 0 && !CommentsStore.getFilter()){
      return null
    } else {
        return (
          <div className="comments_wrap">
              {this.renderList()}
          </div>
        )
    }

  },


  renderList: function(){

        var children = [];
        for (var key in this.state.comments ){
          children.push(
            <CommentItem comment={this.state.comments[key]} key={this.state.comments[key].id} />
          )
        }
        if(children.length < 1){
          return (
            <div>
              <FilterBlock onFilter={this.filterComments} />
              <div className={"comment-list "+this.setCommentListClass()}>
                <NoResults filterString={CommentsStore.getFilter()} />
              </div>
            </div>
          )
        } else {
          return (
            <div>
              <FilterBlock onFilter={this.filterComments} />
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
    },
    filterComments: function(e){
      this.setState({
        comments: CommentsStore.GetFilteredComments()
      })
    }
});
