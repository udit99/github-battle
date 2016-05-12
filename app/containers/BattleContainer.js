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
  render: function(){
    return (
      <Battle/>
    )
  }
})

module.exports = BattleContainer;
