import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm=(props)=>{

const [enteredTitle, setenteredTitle]= useState('')
const [enteredAmount,setenteredAmount]= useState('');
const [enteredDate, setenteredDate]= useState('');

// const [userInput, setuserInput] = useState(
//     {
//         enteredTitle:'',
//         enteredAmount: '',
//         enteredDate: ''  
//     }
// )

const TitleChangeHandler=(event)=>{
    setenteredTitle(event.target.value);
    
    // setuserInput(
    //     {
    //         ...userInput,
    //         enteredTitle : event.target.value

    //     }
    // )
    // setuserInput((prevState)=>{
    //     return {...prevState,enteredAmount: event.target.value}
    // })
}


const AmountChangeHandler= (event)=>{
    setenteredAmount(event.target.value);
    
    // setuserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // })
    // setuserInput((prevState)=>{
    //     return {...prevState,enteredAmount: event.target.value}
    // })
}


const DateChangeHandler=(event)=>{
setenteredDate(event.target.value);

// setuserInput({
//     ...userInput,
//     enteredDate: event.target.value
// })
// setuserInput((prevState)=>{
//     return {...prevState,enteredAmount: event.target.value}
// })
}

    const submitHandler=(event)=>{
        event.preventDefault();

        const ExpenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(ExpenseData);
        setenteredTitle('')
        setenteredAmount('')
        setenteredDate('')
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Add Title</label>
                    <input type='text' value={enteredTitle} onChange={TitleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={AmountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='Date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={DateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__action'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;