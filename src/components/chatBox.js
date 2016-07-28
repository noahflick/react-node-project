var React = require('react')
var ReactDOM = require('react-dom')

var ChatBox = React.createClass({
  getInitialState() {
      return {

      };
  },
  componentDidMount: function () {
        $.get("http://localhost:3000/api/users/57991fea0f03556a19998173").then(user => {
            this.setState({ name: user.name, currentBalance: user.currentBalance })
        })
    },
  render: function(){

    return(
      <div><h1>Name: {this.state.name}</h1>
        <h2>Current Balance: {this.state.currentBalance}</h2>
      </div>
    )
  }

})

module.exports = ChatBox
