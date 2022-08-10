import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { initialState, reducer } from "./src/reducers/index";
import Component from "./src/components/MyComponent";

const theme = createTheme({
  Text: {
    style: {
      fontSize: 20,
      textAlign: "center"
    }
  }
});

export const StoreContext = React.createContext(null)

export default function App() {

  const [ state, dispatch ] = React.useReducer(reducer, initialState)

  return (
    <ThemeProvider theme={theme}>
        <StoreContext.Provider value={{state, dispatch}}>
          <Component />
        </StoreContext.Provider>
    </ThemeProvider>
  );
}