const React = require("react");
const PokemonStore = require("../../stores/pokemon");
const PokemonAction = require("../../actions/pokemon_actions");
const ToysIndex = require("../toys/toys_index");

const PokemonDetail = React.createClass({
  getInitialState: function() {
    return {
      pokemon: undefined
    };
  },
  componentDidMount(){
    PokemonStore.addListener(this._onChange);
    PokemonAction.fetchPokemon(this.props.params.pokemonId);
  },
  _onChange(){
    this.setState({pokemon: this.getStateFromStore()});
  },
  componentWillReceiveProps(nextProps){
    let numId = parseInt(nextProps.params.pokemonId);
    PokemonAction.fetchPokemon(numId);
  },
  getStateFromStore(){
    return PokemonStore.find(this.props.params.pokemonId);
  },
  render(){
    let renderDetail;
    if (this.state.pokemon) {
      renderDetail = (
        <div>
          <div className="pokemon-detail-pane">
            <div className="detail">
              {this.state.pokemon.name}
              <br />
              {this.state.pokemon.poke_type}
              <br />
              {this.state.pokemon.defense}
              <br />
              {this.state.pokemon.moves.join(", ")}
              <br />
              <img src={this.state.pokemon.image_url} />
            </div>
          <ToysIndex toys={this.state.pokemon.toys} />
        </div>
        {this.props.children}
      </div>);
    }
    return(
      <div>
        {renderDetail}
      </div>
    );
  }
});

module.exports = PokemonDetail;
