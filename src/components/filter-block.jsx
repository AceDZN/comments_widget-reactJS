var React = require('react');
var CommentsStore = require('../stores/comments-store');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      filterString:""
    }
  },
  render: function(){
    return (
      <div className="filter_wrap">
        <span className="fa fa-search"></span>
        <input className="filter" onChange={this.handleOnChange} placeholder="Filter" />
      </div>

    )
  },
  handleOnChange: function(event){
    this.setState({
      filterString:event.target.value
    });
    CommentsStore.setFilter(event.target.value);
    if(this.props.onFilter){
      this.props.onFilter();
    }
  }
});
