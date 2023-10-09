// GlobalContext.tsx
import React from 'react';

const GlobalContext = React.createContext<any>(null);

export const GlobalProvider = GlobalContext.Provider;
export const GlobalConsumer = GlobalContext.Consumer;
export default GlobalContext;
