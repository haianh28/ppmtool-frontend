import React, { Component } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getBacklogs} from "../../action/backlogAction";
import PropTypes from "prop-types"
import Backlog from './Backlog';

class ProjectBoard extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getBacklogs(id);
         }
    render() {
        const {id} = this.props.match.params;
        const {project_tasks} = this.props.backlog;
        return (
            <div>
                <div>
              <div className="container">
        <Link to={`/addProjectTask/${id}`} className="btn btn-primary mb-3">
            <i className="fas fa-plus-circle"> Create Project Task</i>
        </Link>
        <br />
        <hr />
        {/* <!-- Backlog STARTS HERE --> 
        bên này viết value như nào thì bên màn Backlog viết như thế để lấy data từ props */}
          <Backlog  project_tasks_prop={project_tasks}/>

        {/* <!-- Backlog ENDS HERE --> */}
    </div>
            </div>
            </div>
        );
    }
}
ProjectBoard.propTypes={
    getBacklogs:PropTypes.func.isRequired
}
const mapStateToProps = state =>({
    backlog: state.backlog
})
export default connect(mapStateToProps,{getBacklogs}) (ProjectBoard);