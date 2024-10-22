import React from 'react';
import Card from './Card';
import {BrowseRouter as Router,Route,Link,Routes,Navigate} from 'react-router-dom';
//import Switch from "react-switch";
class App2 extends React.Component{
    render(){
        return(
            <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand">HR Portal</span>
          <ul className="navbar-nav">
           
            <li className="nav-item">
              <Link className="nav-link" to="/card">
                View Employees
              </Link>
            </li>
          </ul>
        </nav>
          
            <Routes>
          <Route exact path="/" element={<Navigate to={Card}/>} />
          <Route path="/card" component={Card} />
          </Routes>
          
      </div>
        )
    }
}
export default App2;