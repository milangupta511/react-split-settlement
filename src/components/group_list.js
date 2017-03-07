import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import GroupItem from './group_item';
import {fetchGroups} from '../actions/index';

class GroupList extends Component {
    componentWillMount(){
        console.log('here')
    	this.props.fetchGroups()
    }
    handleGroupItemClick = () => {
        console.log('clicked')
    }
    renderGroupList = (groups) => {
    	return groups.map((item,index) => {
    		return (<GroupItem key={index} index={index} name={item.groupName} members={item.groupMember} onClick={this.handleGroupItemClick} />)
    	})
    }
    render() {
    	const {groups} = this.props;
    	if(groups.length) {
    		return (
    			<div>
    				<Link to="/newgroup">+ Create new group</Link>
    				{this.renderGroupList(groups)}
    			</div>)
    	} else{
    		return (
            <div>
                No group Exists 
                <Link to="/newgroup">+ Create new group</Link>
            </div>
        );	
    	}
        
    }
}
const mapStateToProps = ({groups}) => {
	return {groups}
}
export default connect(mapStateToProps, {fetchGroups})(GroupList);