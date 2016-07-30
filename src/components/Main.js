var React = require('react')
var Link = require('react-router').Link
var ChatBox = require('./chatBox')
var Navbar = require('./navBar')

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <Navbar />
        <ChatBox />
      </div>
    )
  }

})

module.exports = Main
