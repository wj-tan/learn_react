import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import Paragraph from './components/paragraph';
import Home from './components/Home';
import MyAppointment from './components/MyAppointment';
import NewAppointment from './components/NewAppointment';
import Search from './components/Search';
import MyProfile from './components/MyProfile';

class app extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div> 
      {/* Content */}
        <Router>
          <Switch>
            <Route exact path={['/Home']}>
              <Home/>
            </Route>
            <Route exact path={['/MyAppointment']}>
              <MyAppointment/>
            </Route>
            <Route exact path={['/NewAppointment']}>
              <NewAppointment/>
            </Route>
            <Route exact path={['/Search']}>
              <Search/>
            </Route>
            <Route exact path={['/MyProfile']}>
              <MyProfile/>
            </Route>
          </Switch>
        </Router>


      <div style={{display: 'flex', marginTop: 50}}>
        <a href="/Home" class="button">Home</a>
        <a href='/MyAppointment' class="button">My Appointment&nbsp;</a> 
        <a href='/NewAppointment' class="button">New Appointment&nbsp;</a> 
        <a href='/Search' class="button">Search&nbsp;</a> 
        <a href='/MyProfile' class="button">My Profile&nbsp;</a> 
      </div>
    </div> );
  }
}

export default app;

//Backend 


//npm install create-react-app
//npx create-react-app
//npm install react-router-dom