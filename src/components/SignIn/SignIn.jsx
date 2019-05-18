import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard';
import './SignIn.css'

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

    handleSubmit = async e => {
        e.preventDefault();
        await this.setState({isAuthenticated:true})
    }


    render() {
        const { username,password,isAuthenticated  } = this.state

        if(isAuthenticated === true){
            return <Redirect to='/dashboard'/>
        }

        return (
            <div className="signIn-form">
                <form className="forma" onChange={this.handleFormChange} onSubmit={this.handleSubmit}>
                    <label htmlFor="username"></label>
                    <br/>
                        <input type="text" name="username" placeholder='username' defaultValue={username}/>
                        <input htmlFor="username" type="password" name="password" placeholder='password' defaultValue={password}/>
                        <br/>
                    <button className="subButton" type="submit">Sign In</button>
                </form>
                <Route exact path='/dashboard' component={Dashboard}/>
            </div>
        );
    }
}

export default SignIn;
