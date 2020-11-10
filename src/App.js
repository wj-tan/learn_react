import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Paragraph from './components/paragraph';
import Home from './components/Home';
import MyAppointment from './components/MyAppointment';
import NewAppointment from './components/NewAppointment';
import Search from './components/Search';
import MyProfile from './components/MyProfile';
import NewAppointment2 from './components/NewAppointment2';
import NewAppointment3 from './components/NewAppointment3';
import Register from './components/Register';
import Login from './components/Login';

class app extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: true
    }
  }
  render() { 
    if (this.state.isLoggedIn){
      return ( <div id='content'> 
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
            <Route exact path={['/NewAppointment2']}>
              <NewAppointment2/>
            </Route>
            <Route exact path={['/NewAppointment3']}>
              <NewAppointment3/>
            </Route>
            <Route exact path={['/Register']}>
              <Register/>
            </Route>
            <Route exact path={['/Login']}>
              <Login/>
            </Route>
          </Switch>
        </Router>


      <div style={{display: 'flex'}}>
        <a href='/Home'><button variant="primary"><img src="home_icon.png" alt="" width='50px' height='50px'></img>Home&nbsp;</button></a>
        <a href='/MyAppointment'><button variant="primary"><img src="appointment.png" alt="" width='50px' height='50px'></img>Bookings&nbsp;</button></a>
        <a href='/NewAppointment'><button variant="primary"><img src="new_icon.png" alt="" width='50px' height='50px'></img>New&nbsp;</button></a>
        <a href='/Search'><button variant="primary"><img src="search_icon.png" alt="" width='50px' height='50px'></img>Search&nbsp;</button></a>
        <a href='/MyProfile'><button variant="primary"><img src="profile_icon.png" alt="" width='50px' height='50px'></img>Profile&nbsp;</button></a>
      </div>
    </div> );
    }

    else{
      return ( <div id='content'> 
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
            <Route exact path={['/Register']}>
              <Register/>
            </Route>
            <Route exact path={['/Login']}>
              <Login/>
            </Route>
          </Switch>
        </Router>
    </div> );
  }
    
    
 
  }
}

export default app;

//Backend 


//npm install create-react-app
//npx create-react-app
//npm install react-router-dom