import React, { Component } from 'react';
class Counter extends Component {
    
    
   
    render() { 
        
        return(
            
        <div>
            <h4>{this.props.id}</h4>
            <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
            <button onClick={()=>this.props.onIncreament(this.props.counter)} className="btn btn-success btn-sm">Increament</button>
            {/* riging event */}
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge badge-primary m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCounter(){
        const {value}=this.props.counter;
        return value===0? "zero": value;
    }
   
}
 
export default Counter;