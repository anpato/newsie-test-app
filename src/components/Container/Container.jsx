import React, { Component } from 'react';
import SignIn from '../SignIn/SignIn';
import { Switch, Route } from 'react-router-dom';
import {getSources} from '../../Services/Calls';
import Dashboard from '../Dashboard/Dashboard';
import SelectContent from '../SelectContent/SelectContent';

class Container extends Component {
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
        const {id} = e.target
        this.setState({selectedSources: [...selectedSources, id]})
        // console.log(selectedSources)
    }

    render() {
        const { sources, selectedSources  } = this.state;
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={SignIn}/>
                    <Route exact path='/dashboard' component={(props)=> <Dashboard {...props} selectedSources={selectedSources} />}/>
                    <Route exact path='/sources' component={(props)=> <SelectContent {...props} handleSourceClick={this.handleSourceClick} sources={sources}/>}/>
                </Switch>
            </div>
        );
    }
}

export default Container;