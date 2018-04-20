import React from 'react'

const NavibarItem = ({item,changeBackground})=>{

	return <li className="nav-item active" onClick={()=>{
		changeBackground(item)
	}}>
		<a>{item}</a>
	</li>
}

export default NavibarItem