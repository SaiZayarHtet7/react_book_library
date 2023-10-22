import { createContext } from "react";

//theme context
const ThemeContext = createContext();

//THeme contextprovider component

const ThemeContextProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
};

export{ThemeContext , ThemeContextProvider}