const PokemonIndex = require('./pokemons/pokemons_index');
const React = require('react');

const App = React.createClass({
  render() {
    return(
      <div id="pokedex">
        <div className="pokemon-index-pane">
          <PokemonIndex />
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
