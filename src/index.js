import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import DataInput from './components/data-input/data-input';
import DataFilter from './components/data-filter/data-filter';
import DataOutput from './components/data-output/data-output';
import DataService from './components/data-service/data-service';

import '../src/index.css';
export default class App  extends Component  {
  state = {
    dataArray:[],
    dataOutput:[],
    input:'',
    errorIndicator:false,
    dataFilter:'',
    register:false
  }

  componentDidMount(){
    const dataservice = new DataService();
    dataservice.getResource().then((el)=>{
      const arr = [...el.data];
      this.setState({
        dataArray:arr
      })
    }).catch((err)=>{
      this.setState({
        errorIndicator:true
      })      
    })
  }

  dataFilter = (filter) => {
    const {register,input}=this.state;
    const arr=[...this.state.dataArray];
    let dataOutput=[];
    if(input){
    switch(filter) {
      case 'Фильтр по подстроке':
        if(register){
           dataOutput = arr.filter((el)=>{
            if(el.indexOf(input)===0){
              return true;
            }
            return null;
          })  
        }else{
           dataOutput = arr.filter((el)=>{
            if(el.toUpperCase().indexOf(input.toUpperCase())===0){
              return true;
            }
            return null;
          }) 
        }
        this.setState({
          dataOutput
        })
        break;
    
      case 'Фильтр по длине': 
      dataOutput = arr.filter((el)=>{
        if(el.length>input){
          return true;
        }
        return null;
      })
      this.setState({
        dataOutput
      })
        break;
    
      default:
        break;
    }
    }
    else{
      this.setState({
        dataOutput
      })
    }
  }

  changeInput = (input) => {
    this.setState({
      input
    })
  }
  changeCheckbox = () => {
    this.setState({
      register:!this.state.register
    })
  }

  render(){
  return(
     <div className="container">
       <div className="panel d-flex">
        <DataInput
        changeInput={this.changeInput}
        changeCheckbox={this.changeCheckbox}/>
        <DataFilter
        dataFilter={this.dataFilter}/>
      </div>
      <DataOutput
      errorIndicator={this.state.errorIndicator}
      dataOutput={this.state.dataOutput}/>
    </div>
  )
}
}
ReactDOM.render(<App />,document.getElementById('root'));
