const React = require('react');
const PokemonStore = require('../../stores/pokemon');
const PokemonAction = require("../../actions/pokemon_actions");
const PokemonIndexItem = require("./pokemon_index_item");
const HashHistory = require('react-router').hashHistory;

const PokemonIndex = React.createClass({
  getInitialState() {
    return({pokemons: PokemonStore.all()});
  },
  componentDidMount(){
    PokemonAction.fetchAllPokemons();
    this.token = PokemonStore.addListener(this._onChange);
  },
  componentWillUnmount(){
    this.token.remove();
  },
  _onChange(){
    this.setState({pokemons: PokemonStore.all()});
  },
  showDetail(pokemonId) {
    HashHistory.push(`pokemon/${pokemonId}`);
  },
  render(){
    return(
      <ul>
        {
          this.state.pokemons.map((pokemon)=>{
            return(<li key={pokemon.id}
              onClick={this.showDetail.bind(this, pokemon.id)}
              className="poke-list-item">
              <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/></li>);
          })
        }
      </ul>);
  }
});

module.exports = PokemonIndex;
