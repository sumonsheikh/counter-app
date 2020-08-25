import React, { Component } from 'react';
class Counter extends Component {
    //state is very special property of react component that contains all data
    //that required of the component
    state = {
        count:1
      };
    styles={
        fontSize:10,
        fontWeight:'bold'
    }
    render() { 
        let classes=" badge m-2 badge-";
        classes += this.state.count===0 ? "warning":"primary";
        return(
            //To avoid Extra div use React.Fragment 
            <React.Fragment>
                {/* add value in this element dynamicly  */}
                <span style={this.styles} className={classes}>{this.formatCount()}</span>
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