import {FETCH_ACTIVITY} from '../actions/index';

export default function(state=[],action) {
	switch (action.type) {
		case FETCH_ACTIVITY:
			return action.payload.data
	}
	return state
}