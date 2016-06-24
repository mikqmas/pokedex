const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const PokemonStore = new Store(AppDispatcher);
const PokemonConstants = require("../constants/pokemon_constants");

let _pokemons = {};

PokemonStore.__onDispatch = payload => {
  switch (payload.actionType){
    case (PokemonConstants.POKEMONS_RECEIVED):
      PokemonStore.resetPokemons(payload.pokemons);
      PokemonStore.__emitChange();
      break;
    case (PokemonConstants.POKEMON_RECEIVED):
      PokemonStore.resetPokemon(payload.pokemon);
      PokemonStore.__emitChange();
      break;
  }
};

PokemonStore.all = () => {
  const pokemonArray = [];
  for (let prop in _pokemons){
    if (_pokemons.hasOwnProperty(prop)) {
      pokemonArray.push(_pokemons[prop]);
    }
  }
  return pokemonArray;
};

PokemonStore.resetPokemons = (pokemons) => {
  _pokemons = {};
  pokemons.forEach((pokemon) => {
    _pokemons[pokemon.id] = pokemon;
  });
};

PokemonStore.resetPokemon = (pokemon) => {
  _pokemons[pokemon.id] = pokemon;
  return _pokemons[pokemon.id]
};

PokemonStore.find = (pokemonId) => {
  return _pokemons[pokemonId];
};

module.exports = PokemonStore;
