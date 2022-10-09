import React, { createContext, useContext, useReducer } from "react";


export const context = createContext()

export const GlobalState = ({ reducer, initialState, children }) => {
    return (
        <context.Provider value={useReducer(reducer, initialState)}>
            {children}
        </context.Provider>
    )
}

export const useGlobalState = () => useContext(context)