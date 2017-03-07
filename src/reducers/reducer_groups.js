import {FETCH_GROUPS} from '../actions/index';

export default function(state=[],action ){
	switch(action.type) {
		case FETCH_GROUPS:
			return action.payload.data
	}
	return state
}