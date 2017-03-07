import React, { Component } from 'react';
import Input from './input';
import {connect} from 'react-redux';
import {onChangeGroupName, onIncrementGroupMember, onChangeGroupMember, onRemoveGroupMember, onSubmitGroup} from '../actions/index';

class NewGroup extends Component {
    handleGroupNameChange = (event) => {
        this.props.onChangeGroupName(event.target.value);
    }
    handleAddMemberClick = () => {
       this.props.onIncrementGroupMember() 
    }
    handleMemberChange = (item,index) => {
        this.props.onChangeGroupMember(item,index)
    }
    handleRemoveGroupMember = (index) => {
        this.props.onRemoveGroupMember(index);
    }
    renderGroupMemberInput = (members) => {
        return members.map((item, index) =>{
            return (<Input type="text" value={item} key={index} index={index} onChange={this.handleMemberChange} onRemove={this.handleRemoveGroupMember} />);
        })
    }
    handleFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmitGroup(this.props.newGroupForm);
        this.props.router.push('/groups')
    }
    render() {
        const {groupName, groupMember} = this.props.newGroupForm
        return (
            <div>
                <h2>Create a group</h2>
                <form method="POST" onSubmit={this.handleFormSubmit}>
                    <label htmlFor="groupName">Group Name</label>
                    <input name="groupName" value={groupName} type="text" onChange={this.handleGroupNameChange} />
                    <label htmlFor="groupMember"> With you and </label>
                    {this.renderGroupMemberInput(groupMember)}
                    <input type="button" value="+" onClick={this.handleAddMemberClick} />
                    <input type="submit" value="Save" />
                </form>
            </div>
        );
    }
}
const mapStateToProps = ({newGroupForm}) => {
    return {newGroupForm}
}
export default connect(mapStateToProps,{onChangeGroupName, onIncrementGroupMember, onChangeGroupMember, onSubmitGroup, onRemoveGroupMember})(NewGroup);