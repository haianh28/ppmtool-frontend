import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import createNewUser from "../../action/sercurityActions";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            fullName: "",
            username: "",
            password: "",
            confirmPassword: "",
            errors: {}
        }
        this.onchange=this.onchange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

    }

    // hàm submit
onchange(e){
    this.setState({[e.target.value]:e.target.name})
}

    //ham change state
onSubmit(e){
    e.preventDefault();
    const newUser={
        fullName: this.state.fullName,
        username: this.state.username,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
    };
    this.props.createNewUser(newUser,this.props.history);
}

    componentWillReceiveProps(nextprops) {
        if (nextprops.errors) {
            this.setState({
                errors: nextprops.errors
            })
        }
    }

    render() {
        return (
            <div classNameName="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your Account</p>
                            <form onSubmit={this.onSubmit} action="create-profile.html">
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Name" name="name"
                                        required />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email"
                                    value={this.state.email}
                                    onchange={this.onchange} />

                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg"
                                     placeholder="Password" name="password"
                                     value={this.state.password}
                                    onchange={this.onchange} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg" 
                                    placeholder="Confirm Password"
                                        name="password2"
                                        value={this.state.confirmPassword}
                                    onchange={this.onchange} />
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Register.propTypes={
    createNewUser:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStateToProps= state =>({
    errors:state.errors
})

export default connect(mapStateToProps, { createNewUser }) (Register);