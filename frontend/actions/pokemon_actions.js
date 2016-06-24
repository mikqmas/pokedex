const AppDispatcher = require("../dispatcher/dispatcher.js");
const PokemonConstants = require("../constants/pokemon_constants");
const ApiUtil = require("../util/api_util");

module.exports = {
  receiveAllPokemons(pokemons){
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },
  fetchAllPokemons(){
    ApiUtil.fetchAllPokemons(this.receiveAllPokemons);
  },
  receiveSinglePokemon(pokemon){
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: pokemon
    });
  },
  fetchPokemon(pokemonId){
    ApiUtil.fetchPokemon(pokemonId, this.receiveSinglePokemon);
  }
};
