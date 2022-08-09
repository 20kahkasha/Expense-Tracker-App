import React from "react";
import "./NewExpenses.css";
import ExpenseForm from './ExpenseForm';

const NewExpenses = (props) => {
  const SaveExpenseDataHandler=(enteredExpenseData)=>{
   const ExpenseData={
    ...enteredExpenseData,
    id: Math.random().toString()
   };
   props.onAddExpense(ExpenseData);
  }

  return (
  <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
  </div>
  );
};
export default NewExpenses;
