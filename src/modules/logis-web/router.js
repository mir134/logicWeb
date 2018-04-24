/**
 * Created by Huangsz on 2018/3/17.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default function createRouter() {
	const router = new Router({
		mode: 'history',
		fallback: false,
		scrollBehavior: () => ({ y: 0 }),
		routes: [
			{path: '/', name: 'index', component: () => System.import('./view/index.vue')}
			,{path: '/about', name: 'about', component: () => System.import('./view/about.vue')}
			,{path: '/culture', name: 'culture', component: () => System.import('./view/culture.vue')}
			,{path: '/college', name: 'college', component: () => System.import('./view/college.vue')}
			,{path: '/network', name: 'network', component: () => System.import('./view/network.vue')}
			,{path: '/building', name: 'building', component: () => System.import('../error/building.vue')}
			,{path: '/newinfo.html', name: 'newinfo', component: () => System.import('../error/building.vue')}
			// ,{path: '*', name: '404', component: () => System.import('../error/404.vue')}
		]
	})

	return router
}
