import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
//import Paragraph from './components/paragraph';
import Home from './components/Home';
import MyAppointment from './components/MyAppointment';
import NewAppointment from './components/NewAppointment1';
import Search from './components/Search';
import MyProfile from './components/MyProfile';
import Register from './components/Register';
import Login from './components/Login';

class app extends Component {
  constructor(props) {
    super(props);
    this.handleclick = this.handleclick.bind(this);
    this.state = {
      //Create profile state here 
      number: 0,
      

    }
  }

  handleclick(input) {
    this.setState({ number: input })

    // 
  }

  // handleArray(input) {
  //   this.setState({ profiles: [...this.state.profiles,input] })
  // }


  render() {

    if (window.location.pathname != '/Login') {
      return (<div id='content'>
        {/* Content */}
        <Router>
          <Switch>
            <Route exact path={['/Home']}>
              <Home number={this.state.number} />
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
              <MyProfile handleclick={this.handleclick} /> 
            </Route>
            <Route exact path={['/Register']}>
              <Register />
            </Route>
            <Route exact path={['/Login']}>
              <Login />
            </Route>
          </Switch>

          <span>
          {
            this.state.number
          }
        </span>
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
            <Route exact path={['/Register']}>
              <Register />
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