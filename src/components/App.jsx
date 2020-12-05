import React, { Fragment } from "react";
import London from "../components/London/London";
import Bogota from "../components/Bogota/Bogota";
import "../assets/styles/Var.scss";
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <London />
        <Bogota />
      </Fragment>
    );
  }
}

export default App;
