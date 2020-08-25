import React, { Component } from 'react';
class Counter extends Component {
    //state is very special property of react component that contains all data
    //that required of the component
    state = {
        count:0
      }
    render() { 
        return(
            //To avoid Extra div use React.Fragment 
            <React.Fragment>
                {/* add value in this element dynamicly  */}
                <span>{this.formatCount()}</span>
                <button>Increament</button>
            </React.Fragment>
        );
    }

    formatCount(){

        //object destructing
        const {count}=this.state;
        return count === 0 ? "zero" : count ;
    }
}
 
export default Counter;