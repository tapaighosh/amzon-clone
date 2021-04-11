import React,{createContext,useContext,useReducer} from "react";

//prepare the data layer
export const StateContex = createContext();

// wrap our app and provied the data layer
export const StateProvider = ({reducer, initialState, children})=>(
    <StateContex.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </StateContex.Provider>
);

// pull information from the data layer 
export const useStateValue = () => useContext(StateContex);