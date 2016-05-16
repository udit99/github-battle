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
      console.log('Players', players);
    })
  },
  render: function(){
    return (
      <Battle
        isLoading={this.state.isLoading}
        playerInfo={this.state.playerInfo}
      />
    )
  }
})

module.exports = BattleContainer;
