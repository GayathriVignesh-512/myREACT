import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import { createBrowserHistory } from "history";
import {Routes} from '../src/Routes/index'
import "./App.scss"
class App extends React.Component {
 render() {
     const history = createBrowserHistory();
     
  return(
   <div className="body-content">
    {/* My App Component */}
    <Router history={history}>
        <Routes />
    </Router>
   </div>
  );
 }
}
export default App