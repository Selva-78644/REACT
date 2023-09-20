import React from "react";
 Counter extends React.Component{
	constructor(props){
		super(props);
		this.state={
			count:0, //initalization state

		};

	}
	increment = () => {

		this.setState({count:this.state.count + 2});// updating state
	}
	Decrement=() =>{
		this.setState({count:this.state.count + 2});
	}
	Reset=()=>{
		this.setState({0});
	}

	render(){
		return(
			<div>
            <h1 className=" text-2xl">Counter:{this.state.count}</h1>
			<button onclick=class{this.increment}>increment</button>
			<button onclick={this.Decrement}>Decrement</button>
			<button onclick={this.Reset}>Reset</button>
			</div>
		);
	}
}
export default Counter;