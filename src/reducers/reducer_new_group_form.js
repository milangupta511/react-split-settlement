import {ONCHANGE_GROUP_NAME, ONINCREMENT_GROUP_MEMBER, ONCHANGE_GROUP_MEMBER,ONREMOVE_GROUP_MEMBER, ONSUBMIT_GROUP} from '../actions/index';
let initialState = {
	groupName: "",
	groupMember: [""]
}
export default function(state = initialState,action) {
	switch(action.type){
		case ONCHANGE_GROUP_NAME: 
			return {...state, groupName: action.payload}
		case ONINCREMENT_GROUP_MEMBER:
			return {...state, groupMember: [...state.groupMember, ""]}
		case ONCHANGE_GROUP_MEMBER:
			return {...state, groupMember: [...state.groupMember.slice(0,action.index), action.item, ...state.groupMember.slice(action.index+1) ]}
		case ONREMOVE_GROUP_MEMBER:
			return {...state, groupMember: [...state.groupMember.slice(0,action.index), ...state.groupMember.slice(action.index+1)]}
		case ONSUBMIT_GROUP:
			return {groupName: "", groupMember: [""]}
	}
	return state
}