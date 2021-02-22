import React from 'react';
import {Route, Switch, NavLink, Redirect} from 'react-router-dom'
import HomePage from './HomePage/homepage';
import ContactUs from './contactus/contactus';
import AboutUs from './aboutus/aboutus';
import Login from './login/login';
import Registration from './registration/registration';
import ContactList from './contactlist/contactlist';
import NoMatch from './NoMatch/NoMatch';

function RouteHandle() {
    return (<div className = "homePageContainer">
         <div className="link-container">
        <NavLink activeClassName="active" exact to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/about-us">
          About Us
        </NavLink>
        <NavLink activeClassName="active" to="/contact-us">
          Contact Us
        </NavLink>
        <NavLink activeClassName="active" to="/login">
          Login
        </NavLink>
        <NavLink activeClassName="active" to="/register">
          Register
        </NavLink>
        <NavLink activeClassName="active" to="/contact-list">
          Contacts
        </NavLink>
      </div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/sample" render={routerProps => <Sample {...routerProps} sampleProp={"sample"}/>} /> */}
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="/contact-list" component={ContactList} />
        <Route path='/default' render={() => <Redirect to= "/" />} />
        <Route component={NoMatch} />
      </Switch>
    </div>);
}

export default RouteHandle;