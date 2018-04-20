import React from 'react'
import NavibarItem from './navibar-item'

const Navibar = ({naviItem, changeBackground})=>{
	return (
			<div className="menu-bar">
				<ul className="nav navbar-nav">
					{naviItem.map((item)=>{
						return <NavibarItem key={item} item = {item} changeBackground = {changeBackground}/>
					})}
				</ul> 
				<form className="form-inline my-2 my-lg-0" action="">
					<input className="form-control mr-sm-2" type="text"/>
					<button className="btn btn-outline-success my-2 my-sm-0">search</button>
				</form>
			</div>
			)
}

export default Navibar