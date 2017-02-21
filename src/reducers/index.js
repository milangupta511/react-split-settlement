import { combineReducers } from 'redux';
import newExpenseFormReducer from './reducer_new_expense_form';
const rootReducer = combineReducers({
	newExpenseForm:newExpenseFormReducer
});

export default rootReducer;
