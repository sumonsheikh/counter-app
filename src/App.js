import React, { Component } from 'react';

import './App.css';
import NavBar from './componets/navbar';
import Counters from './componets/counters';

class App extends Component {
  state = { 
    counters:[
        {id:1,value:4},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:5},
        {id:5,value:2},
    ]
 }
 handleIncreament=counter=>{
     const counters=[...this.state.counters];
     const index=counters.indexOf(counter);
     counter[index]=[...counters];
     counters[index].value++;
     this.setState({counters});
 }
 handleReset=()=>{
     const counters=this.state.counters.filter(c=>{
         c.value=0;
         return c;
     });
     this.setState({counters});
 }
 handleDelete=counterId=>{
    const counters=this.state.counters.filter(c=>c.id!==counterId);
    this.setState({counters:counters});
}
handleDecreament=counter=>{
  const counters=[...this.state.counters];
     const index=counters.indexOf(counter);
     counter[index]=[...counters];
     counters[index].value--;
     this.setState({counters});
}
  render(){
    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncreament={this.handleIncreament}
            onDecreament={this.handleDecreament}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
