import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../actions';
import queryString from "query-string";
import _ from "lodash";
import {Image, Row, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../index.css';
import PopoverPage from './popover/newTeamPop';
import ProjectPop from './popover/newProjectPop';
import Nav from './Nav';



class Home extends Component { 

   componentDidMount() {
     this.props.fetchUser()
     this.props.home()
   }
  
   //Create a new team
  clickHandlerNewTeam = () => {
    console.log('click')
    PopoverPage()
  }

  //create new project
  clickHandlerNewProject = () => {
    console.log('clicked new project')
    ProjectPop ()
  }

  //sorts teams and renders card
  sortTeam = (p) => {
    if (p.group_type === 'team'){
      return (
      this.renderGroup(p)
      )
  }
}
  //sorts Projects and renders card
  sortProject = (p) => {
    if (p.group_type === 'project'){
      return (
        this.renderGroup(p)
      )
    }
  }
  
//loops through users
  renderPerson = (p) => {
    return(
      <Image src={p.profile_pic_url} roundedCircle fluid width="30px" height='30px'/>
    )
  }

  //renders individual card
  renderGroup = (t) =>{
    return(
    
    <div className="card col-md-offset-3 text-center" styles="width: 18rem;">
    <Link to={`/groups/${t._id}`}>
    <div className="card-body">
    <h5 className="card-title">Project</h5> {/* hardcoded Project for formatting purposes need to re-add t.group_name when better data is added */}
    <h6 className="card-subtitle mb-2 text-muted">{t.group_type}</h6>
    <Container>
    <Row>
    {t.people.map(this.renderPerson)}
    </Row>
    </Container>
    {/* <a href={`/groups/${t._id}`} className="card-link" alt="click on groups page"></a> */}
   </div>
   </Link>
  </div>

    )
    }

  render() {


    return (
      <div>
      <Nav />

           <div className="row text-center">
              <div className="col-md-4 two">
              <PopoverPage/>
              </div>

              <div className="col-md-8-offset-3 team-col">
                <h1 className="teams2">Teams</h1>
                </div>

                
                <div className="row text-center marg1">
                  <div className="col-md-8-offset-3">
                    {this.props.homePage.map(this.sortTeam)}
                    </div>
                 
              </div>
              
              <div className="row text-center projects">
              <div className="col-md-4 one">
                <ProjectPop/>
              </div>

              <div className="col-md-8-offset-3">
                <h1 className="teams">Projects</h1>
                </div>

                <div className="row text-center marg">
                    <div className="col-md-8-offset-3">
                  {this.props.homePage.map(this.sortProject)}
    
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
  return ({
    homePage: state.home,
    user: state.user
  })

}

export default connect(
  mapStateToProps,
  actions
)(Home);

