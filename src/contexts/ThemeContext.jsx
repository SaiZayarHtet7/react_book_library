import { createContext, useReducer } from "react";

//theme context
const ThemeContext = createContext();

let ThemeReducer = (state,action) => {
  switch(action.type){
    case "CHANGE_THEME":
      return {...state,theme:action.payload}; //theme:light
    default :
      return state; 
  }
};

//THeme contextprovider component

const ThemeContextProvider = ({ children }) => {
  let [state, dispatch] = useReducer(ThemeReducer, {
    theme: "light",
  });



  let changeTheme = () => {
    //action -> type + payload -> {type,payload}
    //note ---> name convention must be all UPPERCASE 
    dispatch({ type: "CHANGE_THEME", payload:  'dark' });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
