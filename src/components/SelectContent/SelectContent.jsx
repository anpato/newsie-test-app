import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';


class SelectContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            isRedirect : false
        }
    }

    handleLinkClick = (e,index) => {
        this.setState({isRedirect:true})
        this.props.handleBtnClick(e,index)
    }
    render() {
        const {selectedSources,sources, handleSourceClick,isClicked} = this.props
        const {isRedirect} = this.state
        const toggleBtn = selectedSources.length > 0 ?'btn btn-active':'btn';

        if(isRedirect === true){
            return <Redirect to='/dashboard'/>
        }
        
        return (
            <div className="source-container">
                <div className="source-grid">
                {sources ? sources.map((source,index) => {
                    const toggle = isClicked.includes(index) ? 'toggle active' : 'toggle'
                    const id = source.id
                    return <li id="yahoo" className={toggle} onClick={(e)=> handleSourceClick(e,index)}></li>,<li key={index} id={id} className={toggle} onClick={(e)=> handleSourceClick(e,index)} >
                    </li>
                    
                
                }):null}
                
                </div>   
            <Link to='/dashboard' className={toggleBtn} onClick={this.handleLinkClick}>Continue</Link>
            </div>
        );
    }
}

export default SelectContent;
