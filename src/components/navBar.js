var React = require('react')
var ReactDOM = require('react-dom')
var Navbar = require('react-materialize').Navbar
var NavItem = require('react-materialize').NavItem
var Icon = require('react-materialize').Icon

var NavBar = React.createClass({
  render: function(){

    return(
      <Navbar brand='Pocket Benjamins' right>
          <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
      </Navbar>
    )
  }

})

module.exports = NavBar
