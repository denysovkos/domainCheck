import React, { Component } from "react";
import {bindActionCreators} from 'redux'
import { checkDomain } from '../../actions/domain'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Home from "../home/Home";
import NotFound from "../misc/NotFound";

import { Grid } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{margin: 5}}>
        <Grid columns='equal' divided padded relaxed>
          <Grid.Row columns={1}>
            <Header/>
          </Grid.Row>

          <Grid.Row columns={4}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
              </Switch>
          </Grid.Row>

          <Grid.Row columns={1} color='grey' verticalAlign='bottom' style={{position: 'absolute', bottom: 0, left: 0, right: 0, marginBottom: -5}}>
            <Footer />
          </Grid.Row>
        </Grid>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({checkDomain}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
