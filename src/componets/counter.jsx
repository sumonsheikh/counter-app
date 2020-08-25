import React, { Component } from 'react';
class Counter extends Component {
    //state is very special property of react component that contains all data
    //that required of the component
    state = {
        count:1,
        tags:["tag1","tag2","tag3"],
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
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increament</button>
                <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = " badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){

        //object destructing
        const {count}=this.state;
        return count === 0 ? "zero" : count ;
    }
}
 
export default Counter;