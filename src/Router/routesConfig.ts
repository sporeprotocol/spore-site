// routesConfig.ts
import Home from '../Views/Home/Home';
import About from '../Views/About/About'
import Try from "../Views/Try/Try.tsx";

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/about',
        component: About,
        exact: true,
    },
    {
        path: '/try',
        component: Try,
        exact: true
    }
];

export default routes;
