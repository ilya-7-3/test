import React  from 'react';
import '../data-output/data-output.css';
import OnError from '../error-indicator/error-indicator';

const DataOutput = ({errorIndicator,dataOutput}) =>{
    const elements = dataOutput.map((el,i)=>{
        return(
            <li key={i} className="list-group-item">{el}</li>
        )
    })

        if(errorIndicator){
            return(
                <OnError/>
            )
        }

        return(
            <ul className="list-group">
                {elements}                
            </ul>
        )
    
}
export default DataOutput;