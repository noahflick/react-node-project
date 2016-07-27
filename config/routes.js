var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');

router.route('/api/users')
  // .get(usersController.index)
  .post(usersController.create);

router.route('/api/users/:id')
  .get(usersController.show)
  .post(usersController.create)
  .patch(usersController.update)
  .delete(usersController.destroy);

  /* GET home page. */
router.get('*', function(req, res, next) {
  res.sendFile('public/index.html');
});

module.exports = router;
