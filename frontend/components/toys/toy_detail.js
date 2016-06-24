const React = require("react");
const PokemonStore = require('../../stores/pokemon');

const ToyDetail = React.createClass({
  getInitialState(){
    return({toy: this.getStateFromStore()});
  },
  getStateFromStore(){
    let poke = PokemonStore.find(this.props.params.pokemonId);
    let toyId = this.props.params.toyId;
    debugger;
    return poke.toys;
  },
  render(){
    debugger;
    return(
      <div>test</div>
    );
  }
});

module.exports = ToyDetail;
