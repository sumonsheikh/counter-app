import React, { Component } from 'react';
class Counter extends Component {
    //state is very special property of react component that contains all data
    //that required of the component
    state = {
        count:0,
        tags:["tag1"],
      };
    rederingTag(){
        if(this.state.tags.length===0)return <p> "There is no tag"</p>;
        return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>;
    };
    //binding event handler
    handleIcreament=()=>{
         console.log("increament clicked",this);
    };
    render() { 
        
        return(
            
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
            <button onClick={this.handleIcreament} className="btn btn-success btn-sm">Increament</button>
            {this.state.tags.length ===0 && "please enter a tag"}
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge badge-primary m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCounter(){
        const {count}=this.state;
        return count===0? "zero": count;
    }
   
}
 
export default Counter;