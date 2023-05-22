import DashboardIcon from '../assets/icons/dashboard.svg';
import BookIcon from '../assets/icons/book.svg';
import ProductIcon from '../assets/icons/product.svg';
import UserIcon from '../assets/icons/user.svg';
import UsersIcon from '../assets/icons/users.svg';
import CategoryIcon from '../assets/icons/category.svg';


const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/dashboard',
        title: 'Dashboard',
    },{
        id: 2,
        icon: BookIcon,
        path: '/books',
        title: 'Books',
    },{
        id: 3,
        icon: CategoryIcon,
        path: '/categories',
        title: 'Category',
    },{
        id: 4,
        icon: UsersIcon,
        path: '/users',
        title: 'Users',
    },
    {
        id: 5,
        icon: ProductIcon,
        path: '/orders',
        title: 'Orders',
    },
    
    {
        id: 6,
        icon: UserIcon,
        path: '/profile',
        title: 'My account',
    }
]

export default sidebar_menu;