const React = require("react");
const ToysIndexItem = require("./toy_index_item");

const ToysIndex = React.createClass({
  render(){
    let toyList;
    if (this.props.toys) {
      toyList = this.props.toys.map(function(toy){
        return(<ToysIndexItem toy={toy} />);
      });
    }
    return(
      <ul>
        {toyList}
      </ul>
    );
  }
});

module.exports = ToysIndex;
