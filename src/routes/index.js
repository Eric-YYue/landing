import Dashboard from "../pages/dashboard/index";
import PageNotFound from "../pages/PageNotFound";

export const mainRoutes = [
    {
        paht: '/dashboard',
        isShow: true,
        component: Dashboard
    }, {
        path: '/404',
        isShow: true,
        component: PageNotFound
    }
]