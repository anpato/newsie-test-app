import React, { Component } from 'react';
import SignIn from '../SignIn/SignIn';
import { Switch, Route, Redirect } from 'react-router-dom';
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
            isClicked : [],
            removeSource : [],
            isRedirect : false
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
        this.setState({isRedirect:false})
    }

    handleSourceClick = async (e,index) => {
        const { selectedSources,isClicked  } = this.state;
        const {id} = e.target
        let selectSource = selectedSources
        let clickSource = isClicked
        if(!isClicked.includes(index) && !selectedSources.includes(id)){
            console.log(index);
            selectSource = [...selectSource, id]
            clickSource = [...clickSource, index]
            this.setState({
                selectedSources: selectSource,
                isClicked: clickSource
            })
            console.log(isClicked);
            
        } else {
            selectSource.splice(id,1);
            clickSource.splice(index,1);
            this.setState({
                selectedSources: selectSource,
                isClicked: clickSource
            })
        }
        console.log(selectedSources);

    }

    handleBtnClick = async(e) => {
        e.preventDefault()
        const {selectedSources} = this.state 
        console.log(selectedSources)
        const resp = await findBySource(selectedSources)
        localStorage.setItem('articles', JSON.stringify(resp))
        this.setState({selectedSources:[],isClicked:[], isRedirect:true})
        
    }

    render() {
        const { sources, selectedSources, isClicked, isRedirect  } = this.state;
        if(isRedirect===true){
            return <Redirect to='/dashboard'/>
        }
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={SignIn}/>
                    <Route exact path='/dashboard' component={(props)=> <Dashboard {...props} selectedSources={selectedSources}  />}/>
                    <Route exact path='/sources' component={(props)=> <SelectContent {...props} selectedSources={selectedSources} handleSourceClick={this.handleSourceClick} sources={sources} isClicked={isClicked} handleBtnClick={this.handleBtnClick}/> }/>
                </Switch>
            </div>
        );
    }
}

export default Container;