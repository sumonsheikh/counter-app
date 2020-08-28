import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    
    render() { 
        const {onReset,onDelete,onIncreament,counters}=this.props;

        return ( 
            <div>
                <button onClick={onReset}className="btn btn-secondary btn-sm m-2">Reset</button>
                {counters.map(counter=>
                //Handled delete event by handleDelete Method
                <Counter 
                onIncreament={onIncreament} 
                onDelete={onDelete} 
                key={counter.id} 
                counter={counter}>
                    <h4>Counter #{counter.id}</h4>
                </Counter>)}
            </div>
         );
    }
}
 
export default Counters;