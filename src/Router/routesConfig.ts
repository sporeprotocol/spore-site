// routesConfig.ts
import Home from '../Views/Home/Home';
import About from '../Views/About/About'
import SporeSecp256k1EXAMPLE from "../Views/Docs/SporeSecp256k1EXAMPLE";

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
        path: '/doc/SporeSecp256k1EXAMPLE',
        component: SporeSecp256k1EXAMPLE,
        exact: true
    }
];

export default routes;
