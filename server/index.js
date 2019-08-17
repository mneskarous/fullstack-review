const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let { save } = require('../database/index');
let getReposByUsername = ('../helpers/github.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  //use save helper function
  //req.body
  // console.log('req.body',req.body)

  // getReposByUsername(username);

  save(req.body)

  .then(() => {
    res.status(201).send('successfully created');
  })
  .catch((error) => {
    res.status(404).send(error);
  })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // Get top 25 repos
  const records = 25;
  Repo
    .find()
    .limit(records)
    .exec((err, repos) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(repos);
      }
    });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

module.exports = app;