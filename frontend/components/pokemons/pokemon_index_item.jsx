const React = require("react");

const PokemonIndexItem = React.createClass({
  render(){
    return(<div>{`${this.props.pokemon.name} ${this.props.pokemon.poke_type}`}</div>);
  }
});

module.exports = PokemonIndexItem;
