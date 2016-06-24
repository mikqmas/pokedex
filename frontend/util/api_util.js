module.exports = {
  fetchAllPokemons: function(callback){
    $.ajax({
      url: "api/pokemon",
      type: "GET",
      success(pokemon){
        callback(pokemon);
      }
    });
  },
  fetchPokemon: function(pokemonId, callback){
    $.ajax({
      url: "/api/pokemon/" + pokemonId,
      type: "GET",
      success(pokemon){
        callback(pokemon);
      }
    });
  }
};
