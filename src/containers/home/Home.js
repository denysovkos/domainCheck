import React, { Component } from "react";
import {bindActionCreators} from 'redux'
import { connect } from "react-redux";

import { checkDomain } from '../../actions/domain';

import BodyComponent from '../../components/body/Body';


class Home extends Component {
  render() {
    return (
      <BodyComponent {...this.props}/>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({checkDomain}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
