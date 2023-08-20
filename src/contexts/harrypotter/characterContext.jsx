"use client"
import { createContext, useReducer } from "react";
import HarryPotterReducer from "../charactersReducer";

const HarryPotterContext = createContext('')

export const HarryPotterProvider = ({children}) =>{
    const initialState ={
        characters: [],
        character: {},
        data: [],
        loading: false
    }

    const [state, dispatch] = useReducer(HarryPotterReducer, initialState) 

    return <HarryPotterContext.Provider value={{
        ...state,
        dispatch,
    }}>
        {children}
    </HarryPotterContext.Provider>
}

export default HarryPotterContext