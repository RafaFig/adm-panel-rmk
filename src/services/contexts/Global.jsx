import { createContext } from 'react';
const Global = createContext({});

function GlobalContext({ children }) {
  return <Global.Provider value={{}}>{children}</Global.Provider>;
}

export default GlobalContext;
