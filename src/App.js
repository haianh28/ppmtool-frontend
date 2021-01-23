import './App.css';
import Dashboard from './component/Dashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/Layout/Header';
import { BrowserRouter as Router, Route } from "react-router-dom"
import AddProject from './component/Project/AddProject';
import { Provider } from "react-redux"
import store from './store';
import UpdateProject from './component/Project/UpdateProject';
import ProjectBoard from './component/ProjectBoard/ProjectBoard';
import AddProjectTask from './component/ProjectBoard/ProjectTasks/AddProjectTask';
import Backlog from './component/ProjectBoard/Backlog';
import UpdateProjectTask from './component/ProjectBoard/ProjectTasks/UpdateProjectTask';
import Landing from './component/Layout/Landing';
import Register from './component/UserManagement/Register';
import Login from './component/UserManagement/Login';
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from './action/type';
import setJWTToken from './sercurityUtils/setJWTToken';
import {logout} from "./action/sercurityActions";
const jwtToken = localStorage.token  // ở đây phải lấy tên mà ta gán vào localStorage.setItem("token",token);
if (jwtToken) {
  debugger
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />

          {
            //public routes
          }
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {
            //private routes
          }
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addProject" component={AddProject} />
          <Route exact path="/updateProject/:id" component={UpdateProject} />
          <Route exact path="/projectBoard/:id" component={ProjectBoard} />
          <Route exact path="/addProjectTask/:id" component={AddProjectTask} />
          <Route exact path="/backlog" component={Backlog} />
          <Route exact path="/projectBoard/:backlog_id/:pt_id" component={UpdateProjectTask} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
