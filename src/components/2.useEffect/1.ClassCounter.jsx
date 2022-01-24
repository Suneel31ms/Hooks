import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }
  componentDidMount() {
    document.title = `Click ${this.state.count}`;
  }

  componentDidUpdate(prevProps, prevState) {
   if(prevState.count !== this.state.count){
    console.log('Update document title');
   }
    document.title = `Click ${this.state.count}`;
  }
  render() {
    const { count, name } = this.state;
    return (
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button
          onClick={() => {
            this.setState((prevState) => ({ count: prevState.count + 1 }));
          }}
        >
          Clicked {count} times
        </button>
      </div>
    );
  }
}

export default ClassCounter;
