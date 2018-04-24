/**
 * Created by Huangsz on 2018/3/17.
 */

// import {Utils} from '@/api'
// let utils = new Utils()


const state = {
	items: {
		menus: [
			{name: '首页', url: '/', sub: []},
			{name: '企业文化', url: '/about', sub: [
				{name: '企业介绍', url: '/about', sub: []},
				{name: '企业文化', url: '/culture', sub: []},
				{name: '企业使命', url: '/building', sub: []},
			]
			},
			{name: '服务网络', url: '/network', sub: [
				{name: '星仓分布', url: '/network', sub: []},
				{name: '星网点分布', url: '/building', sub: []},
				{name: '星师傅分布', url: '/building', sub: []},
			]
			},
			{name: '服务产品', url: '/building', sub: [
				{name: '家电安装', url: '/building', sub: []},
				{name: '家具安装', url: '/building', sub: []},
				{name: '厨卫安装', url: '/building', sub: []},
				{name: '灯具安装', url: '/building', sub: []},
				{name: '家具保洁', url: '/building', sub: []},
				{name: '除螨除菌', url: '/building', sub: []},
			]
			},
			{name: '家居学院', url: '/college', sub: [
				{name: '学院介绍', url: '/college', sub: []},
				{name: '培训认证', url: '/building', sub: []},
				{name: '家装知识', url: '/building', sub: []},
				{name: '服务流程', url: '/', sub: []},
			]
			},
			{name: '联系我们', url: '/building', sub: [
				{name: '公司地址', url: '/', sub: []},
				{name: '加盟申请', url: '/', sub: []},
			]
			},
		],
		carouselList: [
			{linkUrl:'',imgPath:'/public/images/banner1.jpg'},
			{linkUrl:'',imgPath:'/public/images/banner2.jpg'},
			{linkUrl:'',imgPath:'/public/images/banner3.jpg'}
		]
	}
};


const getters = {
	menus: (state)=> {
		return state.items.menus
	},
	carouselList: (state)=> {
		return state.items.carouselList
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
