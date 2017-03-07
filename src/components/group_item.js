import React, {Component} from 'react';

class GroupItem extends Component {
	renderMembers = (members) => {
		return members.map((item) => {
			return (<span> item</span>)
		})
	}
	handleGroupItemClick = () => {
		this.props.onClick(this.props.index);
	}
	render() {
	const {name, members} = this.props
		 return (
		 	<div className = "border-black" onClick={this.handleGroupItemClick}>
		 		<h2>{name}</h2>
		 		<h3>Members:</h3>
		 		<p>{members.join(', ')}</p>
		 	</div>
		 )
	}
}
export default GroupItem