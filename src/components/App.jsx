import React, { Fragment } from "react";
import Header from "./Header/Header";
import PrincipalImages from "./ContainerImages/ContainerImages";
import Titles from "./Titles/Titles";
import Tabsures from "./Tabs/Tabs";
import Icons from "./Icons/Icons";
import Selects from "./Selects/Selects";
import Footer from "./Footer/Footer";
import "../assets/styles/Var.scss";
import "../assets/styles/Responsive.scss";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <section className="Columns">
          <div>
            <PrincipalImages />
          </div>
          <div>
            <Titles />
          </div>
          <div>
            <Tabsures />
          </div>

          <div>
            <Icons />
          </div>

          <div>
            <Selects />
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
