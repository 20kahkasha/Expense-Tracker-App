import React, {useState} from 'react'
import NewExpenses from "./components/NewExpenses/NewExpenses";
import Expenses from './components/Expenses/Expenses';
const dummy_Expenses = [
  {
    id: "e1",
    title: "Car insurance",
    amount: 450,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e2",
    title: "tax pay",
    amount: 350,
    date: new Date(2021, 3, 12),
  },
];

const App=() =>{
  
  const [expenses,setExpenses]= useState(dummy_Expenses);

  const ExpenseDataHandler=(expense)=>{
      setExpenses((prevExpenses)=>{
        return [expense, ...prevExpenses];
      });
  };
  return (
    <div >
      <NewExpenses onAddExpense={ExpenseDataHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
