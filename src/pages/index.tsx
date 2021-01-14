// Dependencies
import React, { Component } from "react";

// Assets
import "./index.scss";

interface IPropsApp {
  children: Object;
}

class App extends Component<IPropsApp> {
  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

export default App;
