import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../actions';
import queryString from "query-string";
import _ from "lodash";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../index.css';

class Home extends Component {  
  componentDidMount() {
    var query = queryString.parse(this.props.location.search);
    if (query.userId) {
      window.localStorage.setItem("jwt", query.token);
      this.props.fetchUser()
   }
}

  render() {
// if (this.props.authenticated){
    return (
        <div className="home-page">
           <div className="projects-row">
             <button type="button" className="btn btn-success new-button">+ New</button>
               <div className="col-md-8-offset-3 text-center">
                <Link to="/groups" className="h3 separator">Teams</Link>
                  <br></br>
                   <div className="card col-md-offset-3 text-center" styles="width: 18rem;">
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/groups" className="card-link">Card link</a>
                   </div>
                  </div>
                </div>
              </div>
              <div className="projects-row">
               <button type="button" className="btn btn-success new-button">+ New</button>
                <div className="col-md-8-offset-3 text-center">
                 <Link to={`/Groups`} className="h3 separator">Projects</Link>
                  <br></br>
                   <div className="card" styles="width: 18rem;">
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/groups" className="card-link">Card link</a>
                   </div>
                  </div>
                </div>
            </div>
        </div>
    );
// }else{
//    return <Redirect push to="/" />;
//   }
}
}

function mapStateToProps(state) {
  console.log('state', state)
  return {
    authenticated: state.auth
  };
}

export default connect(
  mapStateToProps,
  actions
)(Home);

