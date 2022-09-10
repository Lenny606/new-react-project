import './App.css';
import "./components/Expenses/expenses.css"
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {

  const dummy = [
    { id: "1", title: "Insurace", amount: 150, date: new Date(2022, 9, 3) },
    { id: "2", title: "Food", amount: 180, date: new Date(2022, 9, 2) },
    { id: "3", title: "Beer", amount: 50, date: new Date(2022, 9, 1) }
  ]

  const [usersList, setUsersList] = useState([])

  const [expenses, setExpenses] = useState(dummy);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const usersListHandler = (name, age) => {
    setUsersList((prevUsers) => {
      return [{ username: name, userage: age, id: Math.random().toString() }, ...prevUsers]
    });
  };

  console.log(usersList);

  return (

    <div>
      <AddUser onAddUser={usersListHandler} />
      <UsersList users={usersList} />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>

  );
}

export default App;
