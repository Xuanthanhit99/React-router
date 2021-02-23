import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
  import Home from './../Components/Home';
import News from './../Components/News';
import NewDetail from './../Components/NewDetail';
import Contact from './../Components/Contact';

function DieuHuongURL(){
    return(
        
       
        <div>
          
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
              <Route exact path="/" component={Home}>
              
              </Route>
            <Route exact path="/home" component={Home}>
              
            </Route>
            <Route exact path="/tin" component={News}>
             
            </Route>
            <Route exact path="/tin-tuc/:slug.:id.html" component={NewDetail}>
             
            </Route>
            <Route exact path="/lien-he" component={Contact}>
              
            </Route>
        
        </div>
      
    )
}

export default DieuHuongURL;