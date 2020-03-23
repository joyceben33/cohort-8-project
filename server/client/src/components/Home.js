import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from '../actions';
import _ from "lodash";
import Nav from './Nav';

class Home extends Component {  
  constructor () {
    super()
    
    this.state = {

    }
  }

  componentDidMount () {

  }

  render() {

    return (
 
        <InitLinks>
            <div><h3>Home Page</h3></div>
            <Link to={`/Groups`}>Teams</Link>
            <Link to={`/Groups`}>Projects</Link>
        </InitLinks>
    );
  }
}

function mapStateToProps () {
  return {  }
};

export default connect(
  mapStateToProps,
  actions
)(Home);

const InitLinks= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2em;
  margin: 0 auto;
`;