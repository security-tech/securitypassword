import React, { Component } from 'react'
import $ from 'jquery'

export default class Login extends Component {
  render() {
    codes()
    return (
      <div className="App">
        
        <input type="text" id="user" />
        <br></br>
        <input type="button" id="send" value="action" />
        <p id="log"></p>
      </div>
    )
  }
}

function codes(){
  const req=null
  fetch("https://perfect-cream-wound.glitch.me/")
  .then(response => response.json())
  .then(json => req=JSON.parse(json));
  $("#log").innerHTML=req.data
}