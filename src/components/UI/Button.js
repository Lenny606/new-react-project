import classes from "./Button.module.css";

// reusable btn component

const Button = (props) => {


    //children is reserved word in react, its all content between opening acnd closing tag
    return (
        <button className={classes.button} type={props.type || "button"} onClick={props.onClick}>
            {props.title}
        </button>
    );
};

export default Button;
