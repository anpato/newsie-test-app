import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard';
class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            isAuthenticated: false
        }
    }

    handleFormChange = e => {
        const {name, value} = e.target;
        this.setState({[name]:value})
        console.log(name)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({isAuthenticated:true})
    }


    render() {
        const { username,password,isAuthenticated  } = this.state
        
        if(isAuthenticated === true){
            return <Redirect to='/dashboard'/>
        }
        
        return (
            <div className="signIn-form">
                <form onChange={this.handleFormChange} onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                        <input type="text" name="username" defaultValue={username}/>
                    <label>Password</label>
                        <input htmlFor="username" type="password" name="password" defaultValue={password}/>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        );
    }
}

export default SignIn;