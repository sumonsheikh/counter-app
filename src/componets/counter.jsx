import React, { Component } from 'react';
class Counter extends Component {
    //state is very special property of react component that contains all data
    //that required of the component
    state = {
        value:this.props.counter.value,
        tags:["tag1"],
      };
    rederingTag(){
        if(this.state.tags.length===0)return <p> "There is no tag"</p>;
        return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>;
    };
    //binding event handler
    handleIcreament=()=>{
       
        //increament the value of value
         this.setState({value:this.state.value +1});
    };
   
    render() { 
        
        return(
            
        <div>
            <h4>{this.props.id}</h4>
            <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
            <button onClick={()=>this.handleIcreament()} className="btn btn-success btn-sm">Increament</button>
            {this.state.tags.length ===0 && "please enter a tag"}
            {/* riging event */}
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge badge-primary m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCounter(){
        const {value}=this.state;
        return value===0? "zero": value;
    }
   
}
 
export default Counter;