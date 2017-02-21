import {ONCHANGE_BILL_MEMBER,ONCHANGE_DESCRIPTION,ONCHANGE_AMOUNT} from '../actions/index';

export default function(state = {},action){
    let stateCopy = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case ONCHANGE_BILL_MEMBER:
        case ONCHANGE_DESCRIPTION:
        case ONCHANGE_AMOUNT:
            stateCopy[action.name] = action.payload
            return {...stateCopy}
    }
    return state
}