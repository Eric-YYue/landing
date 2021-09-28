import Dashboard from "../pages/dashboard/index";
import Admin from "../pages/admin/index";
// import PageNotFound from "../pages/PageNotFound";

export const mainRoutes = [
    {
        path: '/dashboard',
        isShow: true,
        component: Dashboard,
        exact: true,
        title: 'Dashboard'
    },
    // {
    //     path:'/login',
    //     isShow: true,
    //     component: isLogined
    // }
]

export const adminRoutes = [
    {
        path: '/admin',
        isShow: true,
        component: Admin,
        exact: true,
        title: 'Admin Page'
    }
]