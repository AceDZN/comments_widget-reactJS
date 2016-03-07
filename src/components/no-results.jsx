var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="comment-block no_comments" ng-if="(comments | filter:filterText).length == 0">
        <div className="comment-avatar">
          <img src="./assets/img/sad-emoticon.png" alt="No Comments" />
        </div>
        <div className="comment">
          <div className="author">
            Sorry,
          </div>
          <p className="content">
            we did not found any comment that match '{this.props.filterString}'
          </p>
        </div>
      </div>
    )
  }
});
