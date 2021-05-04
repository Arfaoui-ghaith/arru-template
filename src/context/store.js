import React from 'react';

const StoreStateContext = React.createContext();
const StoreDispatchContext = React.createContext();

let zone = null;
let projet = null;
let commune = null;
let gouvernorat = "BIZ";

const storeReducer = (state, action) => {
    switch(action.type) {
        case 'zoneEdit' :
            return {
                ...state,
                zone: action.payload,
            }
        case 'projetEdit' :
            return {
                ...state,
                projet: action.payload
            }
        case 'communeEdit' :
            return {
                ...state,
                commune: action.payload
            }
        case 'gouvernoratEdit' :
            return {
                ...state,
                gouvernorat: action.payload
            }

        default:
            throw new Error(`Unkonwn action type: ${action.type}`);
    }
}

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(storeReducer, { zone, projet, commune, gouvernorat });

    return (
        <StoreDispatchContext.Provider value={dispatch}>
            <StoreStateContext.Provider value={state}>
                {children}
            </StoreStateContext.Provider>
        </StoreDispatchContext.Provider>
    );
}

export const useStoreState = () => React.useContext(StoreStateContext);
export const useStoreDispatch = () => React.useContext(StoreDispatchContext);