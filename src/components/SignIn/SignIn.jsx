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
            isAuthenticated: false,
            isValid : true
        }
    }

    handleFormChange = e => {
        const {name, value} = e.target;
        this.setState({[name]:value,isValid:true})
    }

    handleSubmit = e => {
        const {username, password} = this.state;
        e.preventDefault();
        if(username.length >= 3 && password.length >= 3){
            this.setState({isAuthenticated:true})
        } else {
            this.setState({isAuthenticated:false, isValid:false})
        }
    }

    handleCloseModal = () => {
        this.setState({isValid:true})
    }

    render() {
        const { username,password,isAuthenticated,isValid } = this.state
        const modalToggle = isValid === true ? 'modal' : 'modal active'
        if(isAuthenticated === true){
            return <Redirect to='/sources'/>
        }

        return (
            <div className="signin-container">
                <div className={modalToggle}>
                    <h4>Invalid username or password!</h4>
                    <h4>Either must have more than three characters!</h4>
                    <button onClick={this.handleCloseModal}>Close</button>
                </div>
                <form className="signin-form" onChange={this.handleFormChange} onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                        <input  
                            type="text" 
                            name="username" 
                            placeholder='Username' 
                            defaultValue={username}
                            onFocus={this.handleCloseModal}
                        />
                    <label htmlFor="password">Password</label>
                        <input 
                            htmlFor="username" 
                            type="password" 
                            name="password" 
                            placeholder='Password' 
                            defaultValue={password}
                            onFocus={this.handleCloseModal}
                        />
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
