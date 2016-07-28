var React = require('react')
var ReactDOM = require('react-dom')
var Router = require('react-router').Router
var Route = require('react-router').Route

var routes = require('./config/routes.js')


ReactDOM.render(
  <Router>
    {routes}
  </Router>,
  document.getElementById('app')
)
