import React, { Component } from 'react';
import { Redirect, Route,Switch } from 'react-router-dom'
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
            <div className="signin-container">
                <form className="signin-form" onChange={this.handleFormChange} onSubmit={this.handleSubmit}>
                    <label htmlFor="username"></label>
                    <br/>
                        <input className="username" type="text" name="username" placeholder='Username' defaultValue={username}/>
                        <input htmlFor="username" type="password" name="password" placeholder='Password' defaultValue={password}/>
                        <br/>
                    <button className="signin-btn" type="submit">Sign In</button>
                </form>
                <Switch>
                <Route exact path='/sources' component={SelectContent}/>
                <Route exact path='/dashboard' component={Dashboard}/>
                </Switch>
            </div>
        );
    }
}

export default SignIn;
