var React = require('react')
var Link = require('react-router').Link
var ChatBox = require('./chatBox')

var Main = React.createClass({
  render: function(){
    return (
      <div className='container'>
        //components dynamically render here (?)
        <ChatBox />
      </div>
    )
  }

})

module.exports = Main
