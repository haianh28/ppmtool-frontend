import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {PropTypes} from "prop-types";
import {deleteProjectBacklog} from "../../../action/backlogAction";

class ProjectTasks extends Component {
    delete(backlog_id,pt_id) {
        this.props.deleteProjectBacklog(backlog_id,pt_id);
    }
    render() {
// lay du lieu tu props khi duoc chuyen ơ component cha
        const{task} = this.props;
        let priorityString;
        let priorityClass;
        if(task.priority === 1){
            priorityClass = "bg-danger text-light";
            priorityString = "HIGH";
        }
        if(task.priority === 2){
            priorityClass = "bg-warning text-light";
            priorityString = "MEDIUM";
        }
        if(task.priority === 3){
            priorityClass = "bg-info text-light";
            priorityString = "LOW";
        }
        return (
            <div className="card mb-1 bg-light">
            <div className={`card-header text-primary ${priorityClass}`}>
            ID: {task.projectSequence} -- Priority: {priorityString}
            </div>
            <div className="card-body bg-light">
                <h5 className="card-title">{task.summary}</h5>
                <p className="card-text text-truncate ">
                    {task.acceptanceCriteria}
                </p>
                <Link to={`${task.projectIdentifier}/${task.projectSequence}`} className="btn btn-primary">
                    View / Update
                </Link>

                <button className="btn btn-danger ml-4" onClick={this.delete.bind(this,task.projectIdentifier,task.projectSequence)}>
                    Delete
                </button>
            </div>
            <br/>
        </div>
        );
    }
}
ProjectTasks.propTypes={
    deleteProjectBacklog:PropTypes.func.isRequired
}
export default connect(null,{deleteProjectBacklog}) (ProjectTasks);