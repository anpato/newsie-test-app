import React, { Component } from 'react';
import {getSources} from '../../Services/Calls';
import { Link,Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

class SelectContent extends Component {
    constructor(){
        super();
        this.state = {
            sources : [],
            selectedSources : []
        }
    }

    async componentDidMount() {
        try {
            const resp = await getSources();
            this.setState({sources:resp})
        } catch (error) {
            throw error
        }
    }


    handleSourceClick = (e) => {
        const { selectedSources  } = this.state;
        const data = e.target.getAttribute('data')
        this.setState({selectedSources: [...selectedSources, data]})
    }
    // findSources = () => {
    //     const {sources} = this.state;
    //     const findAll = sources.filter(source => {
    //         if(source.id === 'business-insider' || source.id === 'bloomberg' || source.id === 'the-wall-street-journal'){
    //             return <img src={`../../assets/images/${source.id}.png`}/>
    //         }
    //     })
    //     this.setState({findAll})
    //     console.log(findAll)
    //     return findAll
    // }

    render() {
        const { sources,selectedSources  } = this.state;
        return (
            <div>
                {/* {findAll} */}
                {sources ? sources.map((source,index) => {
                    return <li key={index} id={source.id}  data={source} onClick={this.handleSourceClick}>{source.name}</li>
                }): null}   
            <Link to='/dashboard'>Continue</Link>
            <Route exact path='/dashboard' component={()=> <Dashboard selectedSources={selectedSources}/>}/>
            </div>
        );
    }
}

export default SelectContent;