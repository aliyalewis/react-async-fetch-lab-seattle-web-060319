import React, { Component } from 'react'

class App extends Component {

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())
    .then(json => {
      console.log(json);
    })
  }

  render() {
  }
}

export default App
