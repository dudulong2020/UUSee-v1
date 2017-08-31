import * as types from '../action-types';
let initState = {
    info:[],
	types:[],
};
export default function (state=initState,action) {
    switch (action.type){
	    case types.GET_TYPES:
		    return {info:[...state.info],types:action.typesA}
    }
	return state;
}