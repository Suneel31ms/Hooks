import React, { Component } from 'react';

export class IntervalClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    tick = () =>{
        this.setState(prevState=>
           ( {count:prevState.count + 1})
        )
    }
    componentDidMount(){
        console.log('Mount');
       this.interval =  setInterval(this.tick,1000)
    }
    componentWillUnmount(){
        console.log('Unmounting');
        clearInterval(this.interval)
    }
  render() {
      const {count} = this.state
    return (
        <div>
            <h4>{count}</h4>
        </div>
    );
  }
}

export default IntervalClassCounter;
