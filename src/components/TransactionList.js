import React, { useContext } from 'react'
import { TransactionContext } from '../context/GlobalState'


export default function TransactionList() {
  // const transactions = useContext(TransactionContext);
  // console.log(transactions.transactions[1]) so we destructure {transactions:transactions}
  const {transactions} = useContext(TransactionContext);
  const {deleteTransaction} = useContext(TransactionContext);
  let sign = (transaction)=>transaction.amount > 0 ? '+' : '-';
  let ListStyling = 'bg-white shadow p-2 flex justify-between mx-0 border-b-2 relative border-r-4' ;
  let ListRightBorderStyle = (transaction) => transaction.amount > 0 ? 'text-green-400 border-green-600' : 'text-red-400 border-red-600';
    return (
            <>
            
                <h3 className={'text-xl'}>History</h3>
                <ul className={'list-none p-0 mb-10'}>
                  {transactions.map(transaction => 
                     <li key={transaction.id} className={`${ListStyling} ${ListRightBorderStyle(transaction)}`}>{transaction.text} 
                         <span>{sign(transaction)}₹{Math.abs(transaction.amount)}</span>
                             <button onClick={()=>deleteTransaction(transaction.id)} className={`cursor-pointer hover:font-black`}>X</button>
                     </li>)}
                </ul>
            
            </>
    )
}
