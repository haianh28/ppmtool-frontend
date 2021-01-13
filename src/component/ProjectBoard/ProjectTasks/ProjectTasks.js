import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectTasks extends Component {
    render() {

        const{task} = this.props;
        console.log("l",task.projectIdentifier)
        return (
            <div className="card mb-1 bg-light">
            <div className="card-header text-primary">
                ID: {task.projectSequence} -- Priority: {" "}{task.priority}
            </div>
            <div className="card-body bg-light">
                <h5 className="card-title">{task.summary}</h5>
                <p className="card-text text-truncate ">
                    {task.acceptanceCriteria}
                </p>
                <Link to={`${task.projectIdentifier}/updateProjectTask`} className="btn btn-primary">
                    View / Update
                </Link>

                <button className="btn btn-danger ml-4">
                    Delete
                </button>
            </div>
            <br/>
        </div>
        );
    }
}

export default ProjectTasks;