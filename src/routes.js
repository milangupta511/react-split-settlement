import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import FriendList from './components/friend_list';
import GroupList from './components/group_list';
import ActivityList from './components/activity_list';
import NewExpense from './components/new_expense';
import HomePage from './components/home_page';
export default (
    
    <Route path="/" component={App} >
        <Route component={HomePage} >
            <IndexRoute component={FriendList} />
            <Route path="groups" component={GroupList} />
            <Route path="activity" component={ActivityList} />
        </Route>
        <Route path="newexpense" component={NewExpense} />
    </Route>
)