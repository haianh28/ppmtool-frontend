import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Dashboard from './component/Dashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/Layout/Header';
import {BrowserRouter as Router,Route} from "react-router-dom"
import AddProject from './component/Project/AddProject';
import {Provider} from "react-redux"
import store from './store';
import UpdateProject from './component/Project/UpdateProject';
function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <Header />
    <Route exact path="/dashboard" component={Dashboard}/>
    <Route exact path="/addProject" component={AddProject}/>
    <Route exact path="/updateProject/:id" component={UpdateProject}/>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
