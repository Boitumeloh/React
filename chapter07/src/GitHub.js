import React, { Component } from "react";
import axios from "axios"; // npm install axios

class GitHub extends Component {
  constructor() {
    super();
    this.getGitHubData("Boitumeloh");
  }
  getGitHubData(_searchTerm) {
    axios
      .get("https://api.github.com/search/users?q=" + _searchTerm)
      .then((res) => {
        console.log(res.data.items);
      });
  }
  render() {
    return <div></div>;
  }
}
export default GitHub;
