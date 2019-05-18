import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard';
import SelectContent from '../SelectContent/SelectContent';
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
            return <Redirect to='/sources'/>
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
                <Route exact path='/sources' component={SelectContent}/>
            </div>
        );
    }
}

export default SignIn;