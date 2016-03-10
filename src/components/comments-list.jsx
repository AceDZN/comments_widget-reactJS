var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var CommentItem = require('./comment-item');
var FilterBlock = require('./filter-block');
var NoResults = require('./no-results');
var CommentsStore = require('../stores/comments-store');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      comments: CommentsStore.GetComments()
    }
  },
  render: function(){

    return this.renderWrapper()
  },
  renderWrapper: function(){
    if(CommentsStore.GetComments() && Object.keys(CommentsStore.GetComments()).length === 0 && !CommentsStore.getFilter()){
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
        var comments = CommentsStore.GetComments();
        var children = [];
        for (var key in comments ){
          children.push(
            <CommentItem className="comment-block" comment={comments[key]} key={comments[key].id} />
          )
        }
        if(children.length < 1){
          return (
            <div>
              <FilterBlock onFilter={this.filterComments} />
              <div className={"comment-list "+this.setCommentListClass()}>
                <ReactCSSTransitionGroup transitionName="results" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                  <NoResults filterString={CommentsStore.getFilter()} />
                </ReactCSSTransitionGroup>
              </div>
            </div>
          )
        } else {
          return (
            <div>
              <FilterBlock onFilter={this.filterComments} />
              <div className={"comment-list "+this.setCommentListClass()}>
                <ReactCSSTransitionGroup transitionName="results" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                  {children}
                </ReactCSSTransitionGroup>
              </div>
            </div>
          );
        }
    },
    setCommentListClass: function(){
      if(CommentsStore.GetComments().length <=1){
        return "no_list"
      } else {
        return "list"
      }
    },
    filterComments: function(e){
      this.setState({
        comments: CommentsStore.GetComments()
      })
    }
});
