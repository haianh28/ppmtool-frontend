import React, { Component } from 'react';
import ProjectTasks from './ProjectTasks/ProjectTasks';

class Backlog extends Component {
    render() {
        const { project_tasks_prop } = this.props;
        const list = project_tasks_prop.map(
            tasks => (<ProjectTasks key={tasks.id} task={tasks} />
            ))
        // kiem tra xem status 
        let todoitem = [];
        let inProgress = [];
        let done = [];
        console.log("u",list)
        // dung for duyệt list
        for (let i = 0; i < list.length; i++) {
            if (list[i].props.task.status === "TO_DO") {
                console.log(list[i])
                todoitem.push(list[i])
            }
            if(list[i].props.task.status==="IN_PROGRESS"){
                inProgress.push(list[i])
            }
            if(list[i].props.task.status === "DONE"){
                done.push(list[i])
            }
        }
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
                            todoitem
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
                        {
                            inProgress
                        }
                        {/* <!-- SAMPLE PROJECT TASK STARTS HERE -->
                    <!-- SAMPLE PROJECT TASK ENDS HERE --> */}
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-success text-white">
                                <h3>Done</h3>
                            </div>
                        </div>
                        {
                            done
                        }
                        {/* <!-- SAMPLE PROJECT TASK STARTS HERE -->

                    <!-- SAMPLE PROJECT TASK ENDS HERE --> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Backlog;