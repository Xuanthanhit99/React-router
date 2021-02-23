
import './../Css/App.css';
import Nav from './Nav';
import Home from './Home';
import News from './News';
import NewDetail from './NewDetail';
import Contact from './Contact';
import DieuHuongURL from './../router/DieuHuongURL';
import Footer from './Footer';
import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
    <Router>
    <div >
      <Nav/>
      <DieuHuongURL/>
      <Footer/>
    </div>
    </Router>
  );
}
}

export default App;
