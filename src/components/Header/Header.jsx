import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import magnify from '../../assets/images/magnify.png'
import profile from '../../assets/images/profile.png'

class Header extends Component{
  constructor(){
    super();
    this.state = {
      isClicked : false,
      isAgree : false
    }
  }
  handleRedirect = () => {
    this.setState({isClicked:true})
    // return <Redirect to='/sources'/>
  }

  handleTrue = () => {
    this.setState({isAgree:true})
  }

  handleFalse = () => {
    this.setState({isClicked:false})
  }
  render(){
    const {isClicked,isAgree} = this.state
    const redirect = isClicked === true ? 'modal active' : 'modal'
    if(isAgree === true){
      return <Redirect to='/sources'/>
    }
    return(
      <nav className='header-nav'>
        <div className={redirect}>
          <h2>Are you sure you want to go back to sources?</h2>
          <div className="buttons">
          <button onClick={this.handleTrue}>Confirm</button>
          <button onClick={this.handleFalse}>Cancel</button>
          </div>
          
        </div>
        <div className='menu'>
          <div className='hamburger-ctn' onClick={this.handleRedirect}>
            <div className='hamburger'></div>
            <div className='hamburger'></div>
            <div className='hamburger'></div>
          </div>
          <img src={magnify}className='magnify'></img>
        </div>
        <h3>NEWSIE</h3>
        <img src={profile} className='profile-pic'></img>

      </nav>
    )
  }
}

export default Header