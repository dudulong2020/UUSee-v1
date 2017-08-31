import * as types from '../action-types'
import {getTypes, getHomeBanner} from '../../apis/home'

export const getTypesA = (image) => (dispatch) => {
	getTypes().then(typesA => {
		getHomeBanner().then(image => {
			let detail=typesA.map(item => item.type);
			typesA.unshift({type: "推荐", detail, image});
			dispatch({
				type: types.GET_TYPES,
				typesA
			});
		}).catch(err => {
			console.log(err);
		})
	}).catch(err => {
		console.log(err);
	})
};
