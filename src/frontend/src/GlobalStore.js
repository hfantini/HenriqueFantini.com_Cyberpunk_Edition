/*

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

    HENRIQUEFANTINI.COM - V4.0
    Personal Web Site

    Author: Henrique Fantini
    Contact: contact@henriquefantini.com
   
- - - - - - - - - - - - - - - - - - - - - - - - - - -

    File: GlobalStore.js
    Date: 2021/01/13

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

*/

// == IMPORTS
// ==========================================================================================

import React, {createContext, useReducer} from 'react';
import ViewportUtil from "./util/ViewportUtil";

// == CONSTANTS
// ==========================================================================================

const initialState = { isLoading: true, isMobile: ViewportUtil.isMobile() };
const store = createContext(initialState);
const { Provider } = store;

// == CLASS
// ==========================================================================================

/**
 * 
 *  React global state storage.
 * 
 *  @author Henrique Fantini
 *  @since 0.0.1
 * 
 */
const StateProvider = ( { children } ) =>
{
    const [state, dispatch] = useReducer( (state, action) =>
    {
        switch(action.type)
        {
            case "VIEWPORT_CHANGE_TO_MOBILE":
                return {...state,  isMobile: true}
                break;

            case "VIEWPORT_CHANGE_TO_DESKTOP":
                return {...state,  isMobile: false}
                break;

            default:
                throw new Error();
        }
    }, initialState )

    return <Provider value={ {state, dispatch} }> {children} </Provider>;
}

// == EXPORTS
// ==========================================================================================

export { store, StateProvider };
