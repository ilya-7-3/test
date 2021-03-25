import React, {Component} from 'react';
import '../data-input/data-input.css';
export default class DataInput extends Component{
 
    onChangeInput = (e) => {
        this.props.changeInput(e.target.value);
    }
    onChangeCheckbox = (e) => {
        this.props.changeCheckbox();
    }
    
    render(){
        return(        
            <div className="data-input">     
            <div className="input-group mb-3 ">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <input type="checkbox" 
                onChange={this.onChangeCheckbox}/>
              </div>
            </div>
            <input type="text" maxLength="100" className="form-control" aria-label="Text input with checkbox"
            onChange={this.onChangeInput}/>
          </div>
          </div>
        )
    }
}