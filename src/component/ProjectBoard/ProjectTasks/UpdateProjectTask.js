import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import { updateProjectBacklog } from "../../../action/backlogAction";
import { getBacklogAndProjectTask } from "../../../action/backlogAction";

class UpdateProjectTask extends Component {
  constructor(props) {
    super(props);
    // luu tru cac du lieu vao state
    this.state = {
      id: "",
      projectSequence: "",
      summary: "",
      acceptanceCriteria: "",
      status: "",
      priority: "",
      dueDate: "",
      projectIdentifier: "",
      errors:{}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  // use thay doi trang thai tren form
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // call api lay du lieu 
  componentDidMount() {
    const { backlog_id,pt_id } = this.props.match.params;
    this.props.getBacklogAndProjectTask(
        backlog_id,
        pt_id,
      this.props.history
    );
  }
//sử dụng để thay đổi trạng thái (state) của component phụ thuộc props
componentWillReceiveProps(nextProps){
    // neu co loi xay ra thi truyen loi ra
    if(nextProps.errors){
        this.setState({errors:nextProps.errors})
    }
    const {
        id,
      projectSequence,
      summary,
      acceptanceCriteria,
      status,
      priority,
      duedate,
    }=nextProps.backlog;
    // truyen vao project_task vào setState
    this.setState({
        id,
      projectSequence,
      summary,
      acceptanceCriteria,
      status,
      priority,
      duedate,
    });
}

  // use day du lieu tư form vao api
  onSubmit(e) {
      const {backlog_id} = this.props.match.params; 
    // ngan chan cac luồng chạy tiếp theo khi xảy ra lỗi
    e.preventDefault();
    const newtask = {
        id:this.state.id,
      summary: this.state.summary,
      acceptanceCriteria: this.state.acceptanceCriteria,
      duedate: this.state.duedate,
      priority: this.state.priority,
      status: this.state.status,
    };
    this.props.updateProjectBacklog(
        backlog_id,
      this.state.projectSequence,
      newtask,
      this.props.history
    );
  }
  render() {
    const { backlog_id } = this.props.match.params;
    const { errors } = this.state;
    return (
      <div>
        <div className="add-PBI">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <Link
                  to={`/projectBoard/${backlog_id}`}
                  className="btn btn-light"
                >
                  Back to Project Board
                </Link>
                <h4 className="display-4 text-center">Create Project Task</h4>
                <p className="lead text-center">Project Name + Project Code</p>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.summary,
                      })}
                      name="summary"
                      placeholder="Project Task summary"
                      value={this.state.summary || ""}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Acceptance Criteria"
                      name="acceptanceCriteria"
                      value={this.state.acceptanceCriteria || ""}
                      onChange={this.onChange}
                    ></textarea>
                  </div>
                  <h6>Due Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="duedate"
                      value={this.state.duedate || ""}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control form-control-lg"
                      name="priority"
                      value={this.state.priority}
                      onChange={this.onChange}
                    >
                      <option value={0}>Select Priority</option>
                      <option value={1}>High</option>
                      <option value={2}>Medium</option>
                      <option value={3}>Low</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <select
                      className="form-control form-control-lg"
                      name="status"
                      value={this.state.status}
                      onChange={this.onChange}
                    >
                      <option value="">Select Status</option>
                      <option value="TO_DO">TO DO</option>
                      <option value="IN_PROGRESS">IN PROGRESS</option>
                      <option value="DONE">DONE</option>
                    </select>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
UpdateProjectTask.propTypes = {
    backlog: PropTypes.object.isRequired,
    updateProjectBacklog: PropTypes.func.isRequired,
  getBacklogAndProjectTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    backlog: state.backlog.project_task,// data lay ra từ black dươc luu vào state
  errors: state.errors,
});
export default connect(mapStateToProps, {
    updateProjectBacklog,
  getBacklogAndProjectTask,
})(UpdateProjectTask);
