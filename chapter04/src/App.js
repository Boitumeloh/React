import logo from "./logo.svg";
import React, { Component } from "react";
import Rating from './Rating';
import Products from "./Products";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Products/>
      </div>
    );
  }
}

export default App;
