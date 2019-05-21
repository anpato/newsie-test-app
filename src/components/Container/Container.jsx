import React, { Component } from 'react';
import SignIn from '../SignIn/SignIn';
import { Switch, Route } from 'react-router-dom';
import {getSources,findBySource} from '../../Services/Calls';
import Dashboard from '../Dashboard/Dashboard';
import SelectContent from '../SelectContent/SelectContent';
import { className } from 'postcss-selector-parser';

class Container extends Component {
    constructor(){
        super();
        this.state = {
            sources : [],
            selectedSources : [],
            isClicked : false
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

    componentWillUnmount(){
        this.setState({selectedSources:[]})
    }

    handleSourceClick = async (e) => {
        e.preventDefault()
        const { selectedSources  } = this.state;
        const {name,id} = e.target
        console.log(id);
        
        this.setState({
            selectedSources: [...selectedSources, id],
            isClicked: !this.state.isClicked[id]})
        const resp = await findBySource(selectedSources)
        localStorage.setItem('articles', JSON.stringify(resp))
    }

    render() {
        const { sources, selectedSources, isClicked  } = this.state;
        console.log(sources)
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={SignIn}/>
                    <Route exact path='/dashboard' component={(props)=> <Dashboard {...props} selectedSources={selectedSources}  />}/>
                    <Route exact path='/sources' component={(props)=> <SelectContent {...props} selectedSources={selectedSources} handleSourceClick={this.handleSourceClick} sources={sources} isClicked={isClicked}/>}/>
                </Switch>
            </div>
        );
    }
}

export default Container;