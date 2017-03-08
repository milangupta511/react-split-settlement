import axios from 'axios';
export const ONCHANGE_BILL_MEMBER = 'ONCHANGE_BILL_MEMBER';
export const ONCHANGE_DESCRIPTION = 'ONCHANGE_DESCRIPTION';
export const ONCHANGE_AMOUNT='ONCHANGE_AMOUNT';
export const ONSUBMIT_EXPENSE='ONSUBMIT_EXPENSE';
export const ONSUBMIT_GROUP = 'ONSUBMIT_GROUP';
export const ONCHANGE_GROUP_NAME='ONCHANGE_GROUP_NAME';
export const ONINCREMENT_GROUP_MEMBER = 'ONINCREMENT_GROUP_MEMBER';
export const ONCHANGE_GROUP_MEMBER  = 'ONCHANGE_GROUP_MEMBER';
export const ONREMOVE_GROUP_MEMBER = 'ONREMOVE_GROUP_MEMBER';
export const FETCH_GROUPS = 'FETCH_GROUPS';
export const FETCH_ACTIVITY = 'FETCH_ACTIVITY';

export function fetchActivity() {
	const activityUrl = '/api/activity';
	let payload = axios.get(activityUrl);
	return({
		type:FETCH_ACTIVITY,
		payload
	})
}
export function fetchGroups(){
	const groupsUrl = '/api/groups';
	let payload = axios.get(groupsUrl)
	return ({
		type:FETCH_GROUPS,
		payload
	})
}
export function onSubmitGroup(data){
	const groupUrl = axios.post('/api/newgroup', data)
	return({
		type: ONSUBMIT_GROUP,
		payload: groupUrl
	})
}
export function onChangeGroupMember(item,index){
	return({type:ONCHANGE_GROUP_MEMBER, item,index})
}
export function onRemoveGroupMember(index){
	return ({type:ONREMOVE_GROUP_MEMBER, index})
}
export function onChangeGroupName(data) {
	return({type: ONCHANGE_GROUP_NAME, payload:data})
}
export function onIncrementGroupMember(){
	return ({type: ONINCREMENT_GROUP_MEMBER})
}

export function onSubmitExpense(data){
	const expenseUrl = axios.post('/api/expense', data)
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