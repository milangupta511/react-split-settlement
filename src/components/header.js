import React, { Component } from 'react';
import { Link } from 'react-router'

class Header extends Component {
    render() {
        return (
            <div>
                <h1></h1>
                <ul>
                    <li><Link to="/">Friends</Link></li>
                    <li><Link to="/groups">Groups</Link></li>
                    <li><Link to="/activity">Activity</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;