var Reflux = require('reflux');
module.exports = Reflux.createStore({
  comments: [],
  getComments: function(){
    return this.comments;
  },
  setComments: function(comments){
    this.comments = comments
    return ;
  },
  addComment: function(comment){
    var newComment = {
      id: this.comments.length + 1,
      author: comment.email,
      content: comment.message
    };
    this.comments.push(newComment);
  }
});
