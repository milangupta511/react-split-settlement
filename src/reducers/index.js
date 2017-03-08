import { combineReducers } from 'redux';
import newExpenseFormReducer from './reducer_new_expense_form';
import newGroupFormReducer from './reducer_new_group_form';
import groupsReducer from './reducer_groups';
import activityReducer from './reducer_activity';
const rootReducer = combineReducers({
	newExpenseForm:newExpenseFormReducer,
	newGroupForm: newGroupFormReducer,
	groups: groupsReducer,
	activity: activityReducer
});

export default rootReducer;
