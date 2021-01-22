import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createProject} from "../../action/projectAction"
import classnames from "classnames"

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
    projectName:"",
    projectIdentifier: "",
    description: "",
    star_date: "",
    end_date: "",
    errors: {}
    };
    // goi lai ham change và thưc thi 
    //ten hàm được gọi và tên hàm .bind phải giống nhau
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
// life cycle hooks
componentWillReceiveProps(nextProps){
  if(nextProps.errors){
    this.setState({errors:nextProps.errors})
  }
}
onChange(e){
    // update thuộc tính khi change data
    this.setState({[e.target.name]:e.target.value})
}

onSubmit(e){
    e.preventDefault();
    const newProject = {
    projectName: this.state.projectName,
    projectIdentifier: this.state.projectIdentifier,
    description: this.state.description,
    star_date: this.state.star_date,
    end_date: this.state.end_date
    };
    this.props.createProject(newProject,this.props.history)
}

  render() {
    const {errors} = this.state
    return (
      <div>

        {/* <!-- Start of Project FORM --> */}

        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Create Project form</h5>
                <hr />
                <form onSubmit={this.onSubmit} >
                  <div className="form-group">
                    <input
                      type="text"
                    className={classnames("form-control form-control-lg ",{
                      "is-invalid": errors.projectName
                    })}
                      placeholder="Project Name"
                      name="projectName"
                      value={this.state.projectName}
                      onChange={this.onChange}
                    />
                    {errors.projectName && (
                      <div className="invalid-feedback">{errors.projectName}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg ",{
                      "is-invalid": errors.projectIdentifier
                    })}
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      value={this.state.projectIdentifier}
                      onChange={this.onChange}
                    />
                  {errors.projectIdentifier && (
                      <div className="invalid-feedback">{errors.projectIdentifier}</div>
                    )}
                  </div>
                  {/* <!-- disabled for Edit Only!! remove "disabled" for the Create operation --> */}
                  <div className="form-group">
                    <textarea
                       className={classnames("form-control form-control-lg ",{
                      "is-invalid": errors.description
                    })}
                      placeholder="Project Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                    ></textarea>
                  {errors.description && (
                      <div className="invalid-feedback">{errors.description}</div>
                    )}
                  </div>
                  <h6>Start Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="star_date"
                      value={this.state.star_date}                    
                    onChange={this.onChange}
                    />
                      <p>{errors.start_date}</p>
                  </div>
                  <h6>Estimated End Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="end_date"
                      value={this.state.end_date}
                      onChange={this.onChange}
                    />
                      <p>{errors.end_date}</p>
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

        {/* <!-- END OF PROJECT FORM --> */}
      </div>
    );
  }
}
AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = state =>({
  errors: state.errors
})

export default connect(mapStateToProps,{createProject}) (AddProject);
