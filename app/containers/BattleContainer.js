var React = require("react");
var Battle = require("../components/Battle.js");

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
    console.log('Query', query);
    //TODO Fetchinfo from github
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
