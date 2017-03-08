import React, { Component } from 'react';
import ActivityItem from './activity_item';
import {fetchActivity} from '../actions/index';
import {connect} from 'react-redux';
class ActivityList extends Component {
	componentWillMount() {
		this.props.fetchActivity();
	}
	renderActivityList = (activityList) => {
		return activityList.map((item,index) => {
			return <ActivityItem key={index} index={index} title={item.title} desc={item.desc} link={item.link}/>
		})
	}
    render() {
    	const {activity} = this.props
    	if(!activity.length){
    		return(<div>No Activity Found</div>)
    	}
        return (
        	<div>
        		{this.renderActivityList(activity)}
        	</div>
        );
    }
}

export default connect(({activity}) => {return {activity}}, {fetchActivity})(ActivityList);