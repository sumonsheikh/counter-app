import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = { 
        counters:[
            {id:1,value:4},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:5},
            {id:5,value:2},
        ]
     }
     handleReset=()=>{
         const counters=this.state.counters.filter(c=>{
             c.value=0;
             return c;
         });
         this.setState({counters});
     }
     handleDelete=counterId=>{
        const counters=this.state.counters.filter(c=>c.id!==counterId);
        this.setState({counters:counters});
    }
    render() { 
        return ( 
            <div>
                <button onClick={this.handleReset}className="btn btn-secondary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter=>
                //Handled delete event by handleDelete Method
                <Counter onDelete={this.handleDelete} key={counter.id} counter={counter}>
                    <h4>Counter #{counter.id}</h4>
                </Counter>)}
            </div>
         );
    }
}
 
export default Counters;