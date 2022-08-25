import './App.css';
import "./components/Expenses/expenses.css"
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import { useState } from 'react';

function App() {

  // const expenses = [
  //   { id: "1", title: "Insurace", amount: 150, date: new Date(2022, 9, 3) },
  //   { id: "2", title: "Food", amount: 180, date: new Date(2022, 9, 2) },
  //   { id: "3", title: "Beer", amount: 50, date: new Date(2022, 9, 1) }
  // ]

  const [expenses, setExpenses] = useState([
    { id: "1", title: "Insurace", amount: 150, date: new Date(2022, 9, 3) },
    { id: "2", title: "Food", amount: 180, date: new Date(2022, 9, 2) },
    { id: "3", title: "Beer", amount: 50, date: new Date(2022, 9, 1) }
  ])

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (

    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>

  );
}

export default App;
