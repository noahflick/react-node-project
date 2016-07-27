var User = require('../models/user');

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
}

function index(req, res, next) {
  User.find({}, function(err, users) {
    if (err) next(err)
    res.json(users)
  })
}

function show(req, res, next) {
  var id = req.params.id
  console.log('in usersController.show')
  User.findById(id, function(err, user) {
    if (err) next(err)
    res.json(user)
  })
}

function create(req, res, next) {
  var newUser = new User(req.body)
  newUser.save(function(err, savedUser) {
    if (err) next(err);

    res.json(savedUser);
  });

}

function update(req, res, next) {
  var id = req.params.id;

  User.findById(id, function(err, user) {
    if (err) next(err);

    user.name = req.body.name;
    user.currentBalance = req.body.currentBalance;

    user.save(function(err, updatedUser) {
      if (err) next(err);

      res.json(updatedUser);
    });

  });
}

function destroy(req, res, next) {
  var id = req.params.id;
  User.remove({_id:id}, function(err) {
    if (err) next(err);

    res.json({message: 'User successfully deleted'});
  });
}
