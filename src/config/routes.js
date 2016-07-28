var React = require('react')

var Route = require('react-router').Route

var Main = require('../components/Main')
var ChatBox = require('../components/chatBox')

module.exports = (
  <Route>
    <Route name='main' path='/' component={Main} />
    <Route name='chatBox' path='/chatBox' component={ChatBox} />
  </Route>
)
