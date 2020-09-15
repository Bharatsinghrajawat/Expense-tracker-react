import React,{useState,useContext} from 'react'
import { TransactionContext } from '../context/GlobalState';

export default function AddTransaction() {
    const [text , setText] = useState('');
    const [amount , setAmount] = useState('');
    let EnterTextInputStyling = 'border-solid border-2 rounded-sm border-gray-600 block text-xl p-1 w-full text-teal-600';
    let EnterAmountInputStyling = 'border-solid border-2 rounded-sm border-gray-600 block text-xl p-1 w-full text-teal-400';
    let AddTransactionBtnStyling = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded my-2 mx-12';
    const {addTransactionText} = useContext(TransactionContext);
    const handleSubmit = (e)=> {
        e.preventDefault();
        setAmount('');
        setText('');
        const newTransactions = {
            id : Math.floor(Math.random()*10000),
            text : text,
            amount : +amount
            // +amount (+) is used convert string input no. to integer
        }
        addTransactionText(newTransactions);
    }
   
    return (
        
            <>
                <h3 className={'font-serif text-xl font-sans'}>ADD NEW TRANSACTION</h3>
                {/* <h4 className={'inline-block my-2 font-sans'}>TEXT</h4> */}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="text" className={'inline-block my-2 font-sans'}>Text</label>
                    <input className={EnterTextInputStyling} value={text} placeholder={'Enter Text'} onChange={e=>setText(e.target.value)} />
                    <label htmlFor="amount" className={'inline-block my-2 font-sans'}>Amount <br />(negative - expense, positive - income)</label>
                    <input className={EnterAmountInputStyling} value={amount} placeholder={'Enter Amount'}  onChange={(e)=>setAmount(e.target.value)} />  
                    <button className={AddTransactionBtnStyling}>Add transaction</button>                 
                </form>
            </>
        
    )
}
