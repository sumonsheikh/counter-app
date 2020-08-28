import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    
    render() { 
        return ( 
            <div>
                <button onClick={this.props.onReset}className="btn btn-secondary btn-sm m-2">Reset</button>
                {this.props.counters.map(counter=>
                //Handled delete event by handleDelete Method
                <Counter onIncreament={this.props.onIncreament} onDelete={this.props.onDelete} key={counter.id} counter={counter}>
                    <h4>Counter #{counter.id}</h4>
                </Counter>)}
            </div>
         );
    }
}
 
export default Counters;