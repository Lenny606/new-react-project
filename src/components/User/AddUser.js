import Button from "../UI/Button";
import Card from "../UI/Card";
import React, { useState, useRef, useContext } from "react";
import "../UI/Card.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import Context from "../store/context";

const AddUser = (props) => {

    const nameInputRef = useRef(); //Reference
    const ageInputRef = useRef();

    //const [userName, setUserName] = useState('');
    //const [age, setAge] = useState('');
    const [error, setError] = useState(null)

    const ctx = useContext(Context);  // ready for some added context

    // const userNameHandler = (e) => {
    //     setUserName(e.target.value)
    // }

    // const ageHandler = (e) => {
    //     setAge(e.target.value)
    // }


    const AddUserHandler = (e) => {
        e.preventDefault()
        const enterName = nameInputRef.current.value; //value from Reference
        const enterAge = ageInputRef.current.value;
        if (enterName.trim().length === 0 || enterAge.trim().length === 0) {
            setError({
                title: "Empty values",
                text: "Pls enter name and age in right format"
            })
            return;
        }
        if (+enterAge < 1) {
            setError({
                title: "Invalid age",
                text: "Pls enter age higher than 0"
            })
            return;
        }
        props.onAddUser(enterName, enterAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        // setUserName('')
        // setAge('')
    }

    const errorHandler = (e) => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} text={error.text} onConfirm={errorHandler} />}
            <Card className="inputUser">
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="username">Username: </label>
                    <input id="username" type="text" ref={nameInputRef} /><br />
                    <label htmlFor="age" >Age: </label>
                    <input id="age" type="number" ref={ageInputRef} /><br /><br />
                    <Button type="submit" title={"Add User"} />
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;