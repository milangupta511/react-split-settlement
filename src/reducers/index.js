import { combineReducers } from 'redux';
import newExpenseFormReducer from './reducer_new_expense_form';
import newGroupFormReducer from './reducer_new_group_form';
import groupsReducer from './reducer_groups';
const rootReducer = combineReducers({
	newExpenseForm:newExpenseFormReducer,
	newGroupForm: newGroupFormReducer,
	groups: groupsReducer
});

export default rootReducer;
