import React,{Component} from 'react';

class Input extends Component {
	handleInputChange =(event) => {
		const {index, onChange} = this.props
		onChange(event.target.value, index);
	}
	handleInputRemove = () => {
		const {index, onRemove} = this.props
		onRemove(index)
	}
	render(){
		const {type, index, value} = this.props
		return (
			<div>
				<input type={type} onChange={this.handleInputChange} value={value} />
				{index !==0 && (<input type="button" value="X" onClick={this.handleInputRemove} />)}
			</div>
		)
	}
}
export default Input