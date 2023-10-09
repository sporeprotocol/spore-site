import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routesConfig';
import CommonHeader from "../components/CommonHeader/CommonHeader";
import ScrollTop from "../utils/ScrollTop";

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <ScrollTop />
            <CommonHeader />
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.component />}></Route>
                ))}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
