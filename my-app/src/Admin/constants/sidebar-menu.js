import DashboardIcon from '../assets/icons/dashboard.svg';
import BookIcon from '../assets/icons/book.svg';
import ProductIcon from '../assets/icons/product.svg';
import UserIcon from '../assets/icons/user.svg';

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/',
        title: 'Dashboard',
    },{
        id: 2,
        icon: BookIcon,
        path: '/books',
        title: 'Books',
    },
    {
        id: 3,
        icon: ProductIcon,
        path: '/orders',
        title: 'Orders',
    },
    
    {
        id: 4,
        icon: UserIcon,
        path: '/profile',
        title: 'My account',
    }
]

export default sidebar_menu;