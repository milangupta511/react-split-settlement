import axios from 'axios';
export const ONCHANGE_BILL_MEMBER = 'ONCHANGE_BILL_MEMBER';
export const ONCHANGE_DESCRIPTION = 'ONCHANGE_DESCRIPTION';
export const ONCHANGE_AMOUNT='ONCHANGE_AMOUNT';
export const ONSUBMIT_EXPENSE='ONSUBMIT_EXPENSE';

export function onSubmitExpense(data){
	const expenseUrl = axios.post('/expense', data)
	return({
		type: ONSUBMIT_EXPENSE,
		payload: expenseUrl
	})
}
export function onChangeAmount(amount,name){
	return({
		type:ONCHANGE_AMOUNT,
		name,
		payload:amount
	})
}
export function onChangeBillMember(text,name){
	return({
		type:ONCHANGE_BILL_MEMBER,
		name,
		payload:text
	})
}
export function onChangeDescription(text,name){
	return({
		type:ONCHANGE_DESCRIPTION,
		name,
		payload:text
	})
}