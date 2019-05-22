import React, { Component } from 'react';
import magnify from '../../assets/images/magnify.png'
import profile from '../../assets/images/profile.png'

class Header extends Component{
  render(){
    return(
      <nav className='header-nav'>
        <div className='menu'>
          <div className='hamburger-ctn'>
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