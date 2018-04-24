/**
 * Created by Huangsz on 2018/3/17.
 */
// import {Utils} from '@/api'
// let utils = new Utils()
import culture from '../../../../public/md-page/culture.md'

const state = {
	items: {
		culture : culture
	}
};


const getters = {
	culture: (state)=> {
		return state.items.culture
	}
}


const actions = {



}


const mutations = {

}


export default {
	state,
	getters,
	actions,
	mutations
}
