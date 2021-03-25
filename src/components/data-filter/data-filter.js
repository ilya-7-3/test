import React, {Component} from 'react';
import '../data-filter/data-filter.css';

export default class DataFilter extends Component{
    
    onClickLength = (e) => {
        this.props.dataFilter(e.target.innerText);
    }
    onClickStr = (e) => {
        this.props.dataFilter(e.target.innerText);
    }
    
    render(){
        return(
            <div className="filter">
            <button type="button" className="btn btn-primary" onClick={this.onClickLength}>Фильтр по длине </button>
            <button type="button" className="btn btn-secondary "onClick={this.onClickStr}>Фильтр по подстроке</button> 
             </div>
        )
    }
}