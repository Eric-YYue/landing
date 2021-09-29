import Dashboard from "../pages/dashboard/index";
import Admin from "../pages/admin/index";
import Login from "../pages/login/index";
// import PageNotFound from "../pages/PageNotFound";

export const accountRoutes = [
    {
        path:'/login',
        component: Login,
    }
]

export const mainRoutes = [
    {
        path: '/dashboard',
        isShow: true,
        component: Dashboard,
        exact: true,
        title: 'Dashboard'
    }
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