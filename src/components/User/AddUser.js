import Button from "../UI/Button";
import Card from "../UI/Card";
import React, { useState } from "react";
import "../UI/Card.css";
const AddUser = (props) => {

    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');

    const AddUserHandler = (e) => {
        e.preventDefault()
        if (userName.trim().length === 0 || age.trim().length === 0) {
            return;
        }
        if (+age < 0) {
            return;
        }
        setUserName('')
        setAge('')
    }

    const userNameHandler = (e) => {
        setUserName(e.target.value)
    }

    const ageHandler = (e) => {
        setAge(e.target.value)
    }

    console.log(userName + " " + age)
    return (
        <Card className="inputUser">
            <form onSubmit={AddUserHandler}>
                <label htmlFor="username">Username: </label>
                <input id="username" type="text" onChange={userNameHandler} value={userName} /><br />
                <label htmlFor="age" >Age: </label>
                <input id="age" type="number" onChange={ageHandler} value={age} /><br /><br />
                <Button type="submit" title={"Add User"} />
            </form>
        </Card>
    )
}

export default AddUser;