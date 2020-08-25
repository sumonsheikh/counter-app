import React, { Component } from 'react';
class Counter extends Component {
    //state is very special property of react component that contains all data
    //that required of the component
    state = {
        count:0
      };
    styles={
        fontSize:10,
        fontWeight:'bold'
    }
    render() { 
        return(
            //To avoid Extra div use React.Fragment 
            <React.Fragment>
                {/* add value in this element dynamicly  */}
                <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increament</button>
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