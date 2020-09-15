import React,{useContext} from 'react'
import { TransactionContext } from '../context/GlobalState'


export default function IncExp() {
    const {transactions} = useContext(TransactionContext);
    const amounts = transactions.map(transaction=>transaction.amount);
    const income = amounts.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
    const expense = amounts.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0).toFixed(2)*(-1);
    return (
        <div className={'bg-white shadow p-2 flex justify-between my-3 mx-0 border-b-2 pb-4'}>
            <div className={'mx-5'}>INCOME
                <h2 className={'text-green-400'}>₹{income}</h2>
            </div>
            <div className={'border-r-4'}> </div>
            <div className={'mx-5'}>EXPENSE
                <h2 className={'text-red-600'}>₹{expense}</h2>
            </div>
        </div>
    )
}
