//home里放的就是首页所有的信息
import * as types from '../action-types';
let initState = {
    info:{
	    userName:'',
	    avatar:'',
	    getupTime:'',
	    rank:'',
	    continued:'',
	    uid:''
    }
};
export default function (state=initState,action) {
    switch (action.type){
        // case types.GET_HOMEPAGE:
        //     return {...state,info:action.info}
    }
    return state;
}