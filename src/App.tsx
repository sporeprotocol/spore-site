import React from 'react';
import Routes from './Router/route';
import { GlobalProvider } from './context/GlobalContext';
import DocUrl from "./DocData";

const App: React.FC = () => {

    return (
        <GlobalProvider value={DocUrl}>
            <Routes />
        </GlobalProvider>
    );
};

export default App;
