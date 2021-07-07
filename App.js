import React  from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

//import Contact from './Contact';
//import About from './About';
//import Service from './Service';
//import Home from './Home';
//import Navbar from './Navbar';
//import {Redirect, Route,Switch} from 'react-router-dom';
//import Text from './Text';
//import Text1 from './Text1';
//import Text3 from './Text3 '
//import Text4 from './Text4'

//import Text7C from "./Text7C"
//import {Pro} from './Text5'
//import Text9 from './Text9'
//import Text4 from './Text4'
//import Text10 from './Text10'
//import Text11 from './Text11'
//import Login from './Login'
import User  from './User';
import{Route,Switch,Link,NavLink} from  "react-router-dom"
import About from './About'

import './Design.css'




function App() {
 return (
<>
    <div>
    <NavLink className="text6" exact to='/'>User</NavLink>
      {/* <NavLink exact  to='/About'>About</NavLink> */}

      {/* <User/> */}
      <Switch>
       <Route exact path='/' component={User} /> 
        <Route exact path='/About' component={About} />
        </Switch>

      {/* <Login/> */}
      {/* <Text11/> */}
      {/* <Text4/> */}
    {/* <Pro value="world">
     <Text7C/>
      </Pro> */}
     
      
    
  {/* <Text4/> */}
    {/* <Text/> */}
    {/* <Text1/> */}
    {/* <Text3/> */}
  

      {/* <Navbar/>
      <Switch>
      <Route exact path ="/Home" component={Home}/>
        <Route exact path ='/About' component={About}/>
        <Route exact path ='/Contact' component={Contact}/>
        <Route exact path ='/Service' component={Service}/>
        <Redirect to='/Home'/>
        </Switch> */}
  </div>
  </>
     
      
  );
}

export default App;
