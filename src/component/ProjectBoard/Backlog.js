import React, { Component } from 'react';
import ProjectTasks from './ProjectTasks/ProjectTasks';

class Backlog extends Component {
    render() {
        const  { project_tasks_prop } = this.props;
        const list  =  project_tasks_prop.map(
            tasks =>( <ProjectTasks key={tasks.id} task={tasks} />
            ))
        console.log("h",project_tasks_prop)
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-secondary text-white">
                            <h3>TO DO</h3>
                        </div>
                    </div>
{
    list
}
                    {/* <!-- SAMPLE PROJECT TASK STARTS HERE --> */}
                    {/* <UpdateProjectTask project_tasks={project_tasks_prop} /> */}
{/* 
                    <!-- SAMPLE PROJECT TASK ENDS HERE --> */}
                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-primary text-white">
                            <h3>In Progress</h3>
                        </div>
                    </div>
                    {/* <!-- SAMPLE PROJECT TASK STARTS HERE -->

                    <!-- SAMPLE PROJECT TASK ENDS HERE --> */}
                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-success text-white">
                            <h3>Done</h3>
                        </div>
                    </div>
                    {/* <!-- SAMPLE PROJECT TASK STARTS HERE -->

                    <!-- SAMPLE PROJECT TASK ENDS HERE --> */}
                </div>
            </div>
        </div>
        );
    }
}

export default Backlog;