var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require("../containers/PromptContainer");
var BattleContainer = require("../containers/BattleContainer");
var ResultsContainer = require("../containers/ResultsContainer");

var Routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='playerOne' header="Player One" component={PromptContainer} />
      <Route path='playerTwo/:playerOne' header="Player Two"  component={PromptContainer} />
      <Route path='battle' component={BattleContainer} />
      <Route path='results' component={ResultsContainer} />
    </Route>
  </Router>
)
module.exports = Routes;
