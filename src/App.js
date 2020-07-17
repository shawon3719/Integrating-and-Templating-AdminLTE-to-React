import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Master from "./components/Master";

// export default function App() {
//   // return (
//   //   <div>
//   //     {/* <Header /> */}
//   //     <Menu />
//   //     <Content />
//   //     <Footer />
//   //   </div>
//   // );
// }

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Header /> */}
          {/* <Menu /> */}
          {/* <Content /> */}
          <Route exact path="/" component={Login} />
          <Route
            exact
            path="/multi"
            render={(props) => (
              <div>
                <Header />
                <Menu />
                <Content />
              </div>
            )}
          />
          <Route
            exact
            path="/home"
            render={(props) => (
              <div>
                <Header />
                <Menu />
                <Master />
              </div>
            )}
          />
          <div className="container">
            {/* <Route exact path="/main" component={Content} /> */}
            <Route exact path="/test" component={Master} />
            {/* <Route exact path="/login" component={Login} /> */}
            {/* <Route exact path="/profile" component={Profile} /> */}
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
