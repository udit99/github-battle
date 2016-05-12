var React = require("react");
var Battle = require("../components/Battle.js");

var BattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },
  getInitialState: function(){
    return {
      isLoading: true,
      playerInfo: []
    }

  },
  render: function(){
    debugger;
    return (
      <Battle/>
    )
  }
})

module.exports = BattleContainer;
