require('dotenv').load();
var mongoose = require('./database');
var User = require('../models/user')

var users = [
  { name: 'Noah Flick',
    currentBalance: 1800.00
  },
  {
    name: 'Daniel Weisman',
    currentBalance: 4
  }
];



User.remove({}, function(err) {
  if (err) console.log(err);
  User.create(users, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + users.length + " users.");
      mongoose.connection.close();
    }
    process.exit();
  });
});
