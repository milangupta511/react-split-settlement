import React,{Component} from 'react';

class ActivityItem extends Component{
	handleActivityClick = () => {

	}
	render(){
		const {index, desc,title, link} = this.props
		return(
			<div onClick={this.handleActivityClick}>
				<h2>New group Created : {title}</h2>
				<p>with you, {desc.join(' ,')}</p>
			</div>
		)
	}
}
export default ActivityItem;