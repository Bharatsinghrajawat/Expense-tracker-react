import React from 'react'
import Balance from './components/Balance'
import AddTransaction from './components/AddTransaction'
import TransactionList from './components/TransactionList'
import GlobalStateProvider from './context/GlobalState'

export const App = () => {
  return (
    <div className={'box-border bg-gray-100 flex-col items-center justify-center min-h-screen m-0 font-serif'}>
        <h1 className={'text-center text-4xl'}>Expense Tracker</h1>
        <GlobalStateProvider>
        <div className={'m-auto w-64'}>
            <Balance />
            <TransactionList />
            <AddTransaction /> 
        </div>    
        </GlobalStateProvider>
    </div>
  )
}
