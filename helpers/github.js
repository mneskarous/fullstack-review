const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

  let options = {
    url: 'https://api.github.com/repos/request/request',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  callback(error, response, body) => {
    if (!error && response.statusCode === 200) {
      var info = JSON.parse(body);
      console.log(info.owner.login);
      console.log(info.name);
      console.log(info.html_url);
      console.log(info.watchers);
      response.send({info.owner.login, info.name,  info.html_url, info.watchers});
    }
  }

  request(options, callback);

}

module.exports.getReposByUsername = getReposByUsername;