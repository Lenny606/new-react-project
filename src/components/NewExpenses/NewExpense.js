import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";
// import NewExpenseButton from "./NewExpenseButton";

function NewExpense(props) {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            //random number as the id 
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setEdit(false)
    }

    const [edit, setEdit] = useState(false)
    const formOpenHandler = (e) => {
        setEdit(true)

    }
    const formCloseHandler = (e) => {
        setEdit(false)

    }
    return (

        <div className="new-expense">
            {!edit && <button onClick={formOpenHandler}>Add New Expense</button>}
            {edit && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} formCloseHandler={formCloseHandler} />}
        </div>

    )
}

export default NewExpense;
