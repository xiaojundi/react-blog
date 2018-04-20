import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navibar from './components/navibar-list'
import Content from './components/content'


class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			itemName: ["first","second", "third","forth"],
			backgroundColor: "white",
			dictionary:{
				fist: "white",
				second: "blue",
				third: "black",
				forth: "red"
			}
		}
	}
	changeBackground(value){
		this.setState({backgroundColor: this.state.dictionary[value]})
	}
	render(){
		return (
			<div>
				<nav className="navbar navbar-default">
					<Navibar changeBackground={(value)=>{this.changeBackground(value)}} naviItem = {this.state.itemName}/>
				</nav>
				<div>
					<Content colorProperty={this.state.backgroundColor}/>
				</div>
			</div>
		) 
	}
}

ReactDOM.render(<App />, document.querySelector('.content'))