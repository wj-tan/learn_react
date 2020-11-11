import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
//import Paragraph from './components/paragraph';
import Home from './components/Home';
import MyAppointment from './components/MyAppointment';
import NewAppointment from './components/NewAppointment1';
import NewAppointment2 from './components/NewAppointment2';
import NewAppointment3 from './components/NewAppointment3';
import NewAppointment4 from './components/NewAppointment4';
import Search from './components/Search';
import MyProfile from './components/MyProfile';
import Login from './components/Login';

class app extends Component {
  constructor(props) {
    super(props);
    this.handleclick = this.handleclick.bind(this);
    this.state = {
      //Create profile state here 
      profile : {
        name : '123',
        nric : 'S9845926C',
        camp : 'SCDF HQ',
        vocation : 'EMT',
        address : '123 Main St',
        postal : '123465',
        unit : '05-716',
        contact : '95623584'
      }
    }
  }

  handleclick(input1, input2, input3, input4) {
    this.setState(prevState => ({
      profile: {
        ...prevState.profile,
        address: input1,
        postal: input2,
        unit : input3,
        contact: input4
      }
    }))
  }

  render() {

    if (window.location.pathname != '/Login') {
      return (<div id='content'>
        {/* Content */}
        <Router>
          <Switch>
            <Route exact path={['/Home']}>
              <Home profile = {this.state.profile} />
            </Route>
            <Route exact path={['/MyAppointment']}>
              <MyAppointment />
            </Route>
            <Route exact path={['/NewAppointment1']}>
              <NewAppointment profile = {this.state.profile}/>
            </Route>
            <Route exact path={['/NewAppointment2']}>
              <NewAppointment2 />
            </Route>
            <Route exact path={['/NewAppointment3']}>
              <NewAppointment3 />
            </Route>
            <Route exact path={['/NewAppointment4']}>
              <NewAppointment4 />
            </Route>
            <Route exact path={['/Search']}>
              <Search />
            </Route>
            <Route exact path={['/MyProfile']}>
              <MyProfile profile = {this.state.profile} handleclick={this.handleclick} /> 
            </Route>
            <Route exact path={['/Login']}>
              <Login />
            </Route>
          </Switch>

          {/* <span>
          {
            this.state.number
          }
        </span>
         */}
          <div style={{ display: 'flex' }}>
            <NavLink to='/Home'><button variant="primary"><img src="home_icon.png" alt="" width='50px' height='50px'></img>Home&nbsp;</button></NavLink>
            <NavLink to='/MyAppointment'><button variant="primary"><img src="appointment.png" alt="" width='50px' height='50px'></img>Bookings&nbsp;</button></NavLink>
            <NavLink to='/NewAppointment1'><button variant="primary"><img src="new_icon.png" alt="" width='50px' height='50px'></img>New&nbsp;</button></NavLink>
            <NavLink to='/Search'><button variant="primary"><img src="search_icon.png" alt="" width='50px' height='50px'></img>Search&nbsp;</button></NavLink>
            <NavLink to='/MyProfile'><button variant="primary"><img src="profile_icon.png" alt="" width='50px' height='50px'></img>Profile&nbsp;</button></NavLink>
          </div>
        </Router>
      </div>);
    }

    else {
      return (<div id='content'>
        {/* Content */}
        <Router>
          <Switch>
            <Route exact path={['/Home']}>
              <Home />
            </Route>
            <Route exact path={['/MyAppointment']}>
              <MyAppointment />
            </Route>
            <Route exact path={['/NewAppointment1']}>
              <NewAppointment />
            </Route>
            <Route exact path={['/Search']}>
              <Search />
            </Route>
            <Route exact path={['/MyProfile']}>
              <MyProfile />
            </Route>
            <Route exact path={['/Login']}>
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>);
    }

  }
}

export default app;

//Backend 


//npm install create-react-app
//npx create-react-app
//npm install react-router-dom