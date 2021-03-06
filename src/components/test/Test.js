import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // componentWillMount() {
  //   console.log("Component Will Mount");
  // }

  // componentDidUpdate() {
  //   console.log("Component Did Update");
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("component Will Receive Props");
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     test: "something"
  //   };
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {}

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
