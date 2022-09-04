import { useState } from "react"
import "./ExpenseForm.css"

function ExpenseForm(props) {

    const [expense, setExpense] = useState({
        title: "",
        amount: "",
        date: ""
    })

    const [isValid, setIsValid] = useState(true)

    const titleHandler = (e) => {
        if (e.target.value.trim().length > 0) {
            setIsValid(true)
        }
        setExpense((prevState) => {
            return {
                ...prevState,
                title: e.target.value
            }
        })
    }

    const amountHandler = (e) => {

        setExpense((prevState) => {
            return {
                ...prevState,
                amount: e.target.value
            }
        })

    }

    const dateHandler = (e) => {
        setExpense((prevState) => {
            return {
                ...prevState,
                date: e.target.value
            }
        })
    }

    const sumbitHandler = (e) => {
        e.preventDefault()

        const expenseData = {
            title: expense.title,
            amount: expense.amount,
            date: new Date(expense.date)
        }

        //validation 

        if (expenseData.title.trim().length === 0) {
            setIsValid(false)
            return;
        }
        //function via props for child -> parent comunnication
        //pointer to the function 
        props.onSaveExpenseData(expenseData);

        setExpense({
            title: "",
            amount: "",
            date: ""
        })

    }

    //if form !== false in state, displays Add New Expense btn
    //on the click , set form = true in state and displays the inputs
    //cancel btn sets the state to form

    return (
        <form onSubmit={sumbitHandler}>
            <div className="new-expense__controls">
                <div className={`new-expense__control ${!isValid ? 'invalid' : ''}`}>
                    <label >title</label >
                    <input type='text' value={expense.title} onChange={titleHandler} />
                </div >
                <div className="new-expense__control">
                    <label>amount</label>
                    <input type='number' value={expense.amount} min="0.01" step="0.01" onChange={amountHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={expense.date} min="2020-01-01" onChange={dateHandler} />
                </div>
            </div >
            <div className="new-expense__actions">
                <button type="button" onClick={props.formCloseHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form >

    )
}

export default ExpenseForm;