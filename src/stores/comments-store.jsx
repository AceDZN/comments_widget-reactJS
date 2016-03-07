var Reflux = require('reflux');
var _ = require('underscore');

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
      id: (this.comments.length + 1).toString() ,
      author: comment.email,
      content: comment.message
    };
    this.comments.push(newComment);
    return this.GetComments();
  },
  setFilter: function(string){
    this.filter = string;
  },
  getFilter: function(){
    return this.filter
  },
  GetFilteredComments: function(){
    var searchStr=this.filter.toString().toLowerCase();
    var results = _.filter(this.comments, function (obj) {
        return _.values(obj).some(function (el) {
            return el.toString().toLowerCase().indexOf(searchStr) > -1;
        });
    });

    return results
  }
});
