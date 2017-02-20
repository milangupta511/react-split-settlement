import React, { Component } from 'react';
import {Link} from 'react-router';

class GroupList extends Component {
    render() {
        return (
            <div>
                No group Exists 
                <Link to="/newgroup">+ Create new group</Link>
            </div>
        );
    }
}

export default GroupList;