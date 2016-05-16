var axios = require("axios");

var param = "";

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param)
}
var helpers = {
  getPlayersInfo: function(players){
    return axios.all(players.map(function(username){
      return getUserInfo(username);
    })).then(function(info){
      console.log(info);
    })

  }
}

module.exports = helpers;
