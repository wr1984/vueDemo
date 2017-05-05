import Vue from 'vue'
import Router from 'vue-router'
import Space from '@/components/common/Space'
import Tree from '@/components/common/Tree'
import Particle from '@/components/common/Particle'
import Top from '@/components/top/Top'
import About from '@/components/about/About'
import Products from '@/components/products/Products'
import Projects from '@/components/projects/Projects'
import Clients from '@/components/clients/Clients'
import Recruitment from '@/components/recruitment/Recruitment'
import Contacts from '@/components/contacts/Contacts'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'top',
			components: {
				default: Top,
				tree: Tree
			}
		},
		{
			path: '/about',
			name: 'about',
			components: {
				default: About,
				space: Space
			}
		},
		{
			path: '/products',
			name: 'products',
			components: {
				default: Products,
				particle: Particle
			}
			
		},
		{
			path: '/projects',
			name: 'projects',
			components: {
				default: Projects,
				particle: Particle
			}
		},
		{
			path: '/clients',
			name: 'clients',
			components: {
				default: Clients,
				tree: Tree
			}
			
		},
		{
			path: '/recruitment',
			name: 'recruitment',
			components: {
				default: Recruitment,
				space: Space
			}
			
		},
		{
			path: '/contacts',
			name: 'contacts',
			components: {
				default: Contacts,
				particle: Particle
			}
			
		}
	]
})