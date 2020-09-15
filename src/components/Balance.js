import React,{useContext} from 'react'
import { TransactionContext } from '../context/GlobalState'
import IncExp from './IncExp'
export default function Balance() {
    const {transactions} = useContext(TransactionContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc,item)=>(acc=acc+item),0).toFixed(2);
    return (
        <div>
            <p className={'text-base'}>YOUR BALANCE</p>
            <h3 className={'text-3xl'}>₹{total}</h3>
            <IncExp />
        </div>
    )
}
