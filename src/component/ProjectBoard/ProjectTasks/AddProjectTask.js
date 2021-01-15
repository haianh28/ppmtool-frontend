import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import classnames from "classnames";
import { createProjectTask } from '../../../action/backlogAction'

class AddProjectTask extends Component {
    constructor(props) {
        super(props);
        const { id } = this.props.match.params;
        // luu tru cac du lieu vao state
        this.state = {
            summary: "",
            acceptanceCriteria: "",
            duedate: "",
            priority: 0,
            status: "",
            projectIdentifier: id,
            errors: {}
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    componentWillReceiveProps(nextprops) {
        if (nextprops.errors) {
            this.setState({ errors: nextprops.errors })
        }
    }

    // use thay doi trang thai tren form 
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    // use day du lieu tư form vao api
    onSubmit(e) {
        // ngan chan cac luồng chạy tiếp theo khi xảy ra lỗi
        e.preventDefault();
        const newtask = {
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            duedate: this.state.duedate,
            priority: this.state.priority,
            status: this.state.status,
        };
        this.props.createProjectTask(
            this.state.projectIdentifier,
            newtask,
            this.props.history
        );
    }
    render() {
        const { id } = this.props.match.params;
        const { errors } = this.state;
        return (
            <div>
                <div className="add-PBI">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <Link to={`/projectBoard/${id}`} className="btn btn-light">
                                    Back to Project Board
                    </Link>
                                <h4 className="display-4 text-center">Create Project Task</h4>
                                <p className="lead text-center">Project Name + Project Code</p>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                            name="summary" placeholder="Project Task summary"
                                            className={classnames("form-control form-control-lg ", {
                                                "is-invalid": errors.summary
                                            })}
                                            value={this.state.summary}
                                            onChange={this.onChange}
                                        />
                                        {errors.summary && (
                                            <div className="invalid-feedback">{errors.summary}</div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <textarea className={classnames("form-control form-control-lg ", {
                                            "is-invalid": errors.acceptanceCriteria
                                        })}
                                            placeholder="Acceptance Criteria" name="acceptanceCriteria"
                                            value={this.state.acceptanceCriteria}
                                            onChange={this.onChange}></textarea>
                                    </div>
                                    <h6>Due Date</h6>
                                    <div className="form-group">
                                        <input type="date"
                                            className="form-control form-control-lg"
                                            name="duedate"
                                            value={this.state.duedate}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control form-control-lg" name="priority"
                                            value={this.state.priority}
                                            onChange={this.onChange}>
                                            <option value={0}>Select Priority</option>
                                            <option value={1}>High</option>
                                            <option value={2}>Medium</option>
                                            <option value={3}>Low</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <select className="form-control form-control-lg" name="status"
                                            value={this.state.status}
                                            onChange={this.onChange}>
                                            <option value="">Select Status</option>
                                            <option value="TO_DO">TO DO</option>
                                            <option value="IN_PROGRESS">IN PROGRESS</option>
                                            <option value="DONE">DONE</option>
                                        </select>
                                    </div>
                                    <input type="submit" className="btn btn-primary btn-block mt-4" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
AddProjectTask.propTypes = {
    createProjectTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors: state.errors
})
export default connect(mapStateToProps, { createProjectTask })(AddProjectTask);