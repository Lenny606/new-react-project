import Button from "../UI/Button";
import Card from "../UI/Card";
import React, { useState } from "react";
import "../UI/Card.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState(null)

    const userNameHandler = (e) => {
        setUserName(e.target.value)
    }

    const ageHandler = (e) => {
        setAge(e.target.value)
    }


    const AddUserHandler = (e) => {
        e.preventDefault()
        if (userName.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Empty values",
                text: "Pls enter name and age in right format"
            })
            return;
        }
        if (+age < 1) {
            setError({
                title: "Invalid age",
                text: "Pls enter age higher than 0"
            })
            return;
        }
        props.onAddUser(userName, age)
        setUserName('')
        setAge('')
    }

    const errorHandler = (e) => {
        setError(null);
    }

    console.log(userName + " " + age)
    return (
        <>
            {error && <ErrorModal title={error.title} text={error.text} onConfirm={errorHandler} />}
            <Card className="inputUser">
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="username">Username: </label>
                    <input id="username" type="text" onChange={userNameHandler} value={userName} /><br />
                    <label htmlFor="age" >Age: </label>
                    <input id="age" type="number" onChange={ageHandler} value={age} /><br /><br />
                    <Button type="submit" title={"Add User"} />
                </form>
            </Card>
        </>
    )
}

export default AddUser;