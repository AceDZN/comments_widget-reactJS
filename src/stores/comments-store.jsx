var Reflux = require('reflux');

module.exports = Reflux.createStore({
  comments: [],
  GetComments: function(){
    return this.comments;
  },
  SetComments: function(comments){
    this.comments = comments
    return this.GetComments();
  },
  AddComment: function(comment){
    var newComment = {
      id: this.comments.length + 1,
      author: comment.email,
      content: comment.message
    };
    this.comments.push(newComment);
    return this.GetComments();
  }
});
