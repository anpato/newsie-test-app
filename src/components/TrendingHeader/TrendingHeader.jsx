import React, { Component } from 'react';
import newsIcon from '../../assets/images/newsIcon.png'
import Trending from '../Trending/Trending'

class TrendingHeader extends Component{
  constructor() {
    super();
    this.state = {
      isclicked: false
    }
  }
  handleClick = () =>{
    if(this.state.isclicked === false){
      this.setState({
        isclicked: true
      })
    }
    else{
      this.setState({
        isclicked: false
      })
    }
    
  }
  render(){
    return(
      <div className='trending-container' onClick={this.handleClick}>
        <div className='trending-header'>
          <h3>Trending</h3>
          <div className='trending-items'>
            <div className='trend-item'>
              <img src={newsIcon} alt=""/>
              <h4>LYFT</h4>
            </div>
            <div className='trend-item'>
              <img src={newsIcon} alt=""/>
              <h4>BREXIT</h4>
            </div>
            <div className='trend-item'>
              <img src={newsIcon} alt=""/>
              <h4>BITCOIN</h4>
            </div>
            <div className='trend-item'>
              <img src={newsIcon} alt=""/>
              <h4>US-CHINA</h4>
            </div>
          </div>
        </div>
        {this.state.isclicked ? <Trending /> : null}
      </div>
    )
  }
}

export default TrendingHeader