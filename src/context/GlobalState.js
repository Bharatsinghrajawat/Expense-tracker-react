import React,{useReducer,createContext} from 'react'
import TrackReducer from './TrackReducer'
let initialState = {
    transactions : []
}
export const TransactionContext = createContext(initialState);
export default function GlobalStateProvider({children}) {
    const [state , dispatch] = useReducer(TrackReducer,initialState);
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload : id
        });
    }
    const addTransactionText = (transaction) => {
        dispatch({
            type : 'ADD_TRANSACTION',
            payload : transaction 
        })
    } 

    return (
        <div>
            <TransactionContext.Provider value={{transactions:state.transactions , deleteTransaction , addTransactionText}}>
               {children}
            </TransactionContext.Provider>
        </div>
    )
}
