import React, { Component } from 'react';
import { Link } from 'react-router';


class HomePage extends Component {
    render() {
        return (
            <div>
                <Link to="/newexpense" >Add Expense</Link>
                <h1></h1>
                <ul>
                    <li><Link to="/">Friends</Link></li>
                    <li><Link to="/groups">Groups</Link></li>
                    <li><Link to="/activity">Activity</Link></li>
                </ul>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default HomePage;