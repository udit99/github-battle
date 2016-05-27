var React = require("react");
var Battle = require("../components/Battle.js");
var githubHelpers = require('../utils/githubHelpers');

var BattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      isLoading: true,
      playerInfo: []
    }

  },
  componentDidMount: function(){
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]).then(function(players){
      this.setState({
        isLoading: false,
        playerInfo: [players[0], players[1]]
      })
    }.bind(this));
  },

  handleInitiateBattle: function(){
    this.context.router.push({
      pathname: '/results',
      state: {
        playerInfo: this.state.playerInfo
      }
    })
  },

  render: function(){
    return (
      <Battle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playerInfo}
      />
    )
  }
})

module.exports = BattleContainer;
