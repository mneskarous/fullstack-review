const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('database connected');
});

let repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  owner: {
    login: String
  },
  name: String,
  html_url: { type: String, unique: true },
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);



let save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  console.log('data',data);
  return Repo.create(data)
}

module.exports.save = save;