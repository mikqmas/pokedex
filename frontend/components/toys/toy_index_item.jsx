const React = require("react");

const ToysIndexItem = React.createClass({
  render(){
    return(<li className="toy-list-item" key={this.props.toy.id}>{this.props.toy.name}</li>);
  }
});

module.exports = ToysIndexItem;
