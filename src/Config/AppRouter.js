import Salessummary from '../components/views/dashboard/sales-summary/Salessummary';
import Salessummaryempty from '../components/views/dashboard/sales-summary/Salessummaryempty'
import Itemsales from '../components/views/dashboard/item-sales/Itemsales'
import Layout from '../components/common/Layout'
export const AppRouter = [
	{ 
		path: '/',
		exact: true,
		name: 'Home',
		layout: Layout,
		component: Salessummary,
	},
    {
		path: '/salessummaryempty',
		exact: true,
		name: 'Sale summary empty',
		layout: Layout,
		component: Salessummaryempty,
	},
	{ 
		path: '/itemsales',
		exact: true,
		name: 'item Sales',
		layout: Layout,
		component: Itemsales,
	},
];