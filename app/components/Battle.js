var React = require("react");

function Battle(props){
  return props.isLoading === true ? <p> Loading </p> : <p> Battle Muthafucka </p>
}

module.exports = Battle;
