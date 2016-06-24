const React = require("react");
const ReactDOM = require("react-dom");
const PokemonIndex = require("./components/pokemons/pokemons_index");
const PokemonStore = require("./stores/pokemon");
const PokemonAction = require("./actions/pokemon_actions");
const App = require('./components/app');
const PokemonDetail = require("./components/pokemons/pokemon_detail");
const ToyDetail = require("./components/toys/toy_detail");
const ReactRouter = require('react-router');
const HashHistory = ReactRouter.hashHistory;
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;

const routes = (
  <Route path="/" component={App}>
      <Route path="pokemon/:pokemonId" component={PokemonDetail}>
        <Route path="toys/:toyId" component={ToyDetail} />
      </Route>
  </Route>
);

$(() => {
  ReactDOM.render(<Router history={HashHistory}>{routes}</Router>, document.getElementById("root"));
});
