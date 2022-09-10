import Button from "../UI/Button";
import Card from "../UI/Card";
import React, { useState } from "react";
import "../UI/Card.css";
const AddUser = (props) => {

    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');

    const AddUserHandler = (e) => {
        e.preventDefault()
        setUserName()
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
                <input id="username" type="text" onChange={userNameHandler} /><br />
                <label htmlFor="age" >Age: </label>
                <input id="age" type="number" onChange={ageHandler} /><br /><br />
                <Button type="submit" title={"Add User"} />
            </form>
        </Card>
    )
}

export default AddUser;