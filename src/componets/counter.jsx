import React, { Component } from 'react';
class Counter extends Component {
    //state is very special property of react component that contains all data
    //that required of the component
    state = {
        count:1,
        tags:[],
      };
    renderingTag(){
        if(this.state.tags.length===0) return <p>There is no tag</p>;
        return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>;

    };
    
    render() { 
        
        return(
            //To avoid Extra div use React.Fragment 
            <React.Fragment>
                {this.renderingTag()}
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