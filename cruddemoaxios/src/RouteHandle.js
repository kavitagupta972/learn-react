import React from 'react';
import {Route, Switch, NavLink, Redirect} from 'react-router-dom'
import HomePage from './HomePage/homepage';
import ContactUs from './contactus/contactus';
import AboutUs from './aboutus/aboutus';
import Login from './login/login';
import Registration from './registration/registration';
import ContactList from './contactlist/contactlist';
import NoMatch from './NoMatch/NoMatch';
import Nav from './Nav/Nav';
import Items from './items/items';
import ItemDetail from './ItemDetail/ItemDetail';

function RouteHandle() {
    return (
      <div className = "homePageContainer">
         <div className="link-container">
         <Nav/>
        </div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/sample" render={routerProps => <Sample {...routerProps} sampleProp={"sample"}/>} /> */}
        <Route path="/about-us" component={AboutUs} />
        <Route path='/default' render={() => <Redirect to= "/" />} />
        <Route path = '/items' exact component={Items}/>
        <Route path = '/items/:id' component={ItemDetail}/>
        <Route component={NoMatch} />
      </Switch>
    </div>);
}

export default RouteHandle;