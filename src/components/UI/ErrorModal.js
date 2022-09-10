import ReactDOM from 'react-dom';
import Wrapper from "../Helpers/Wrapper";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";


const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.text}</p>
            </div>
            <footer className={classes.actions}>
                <Button title="OK" onClick={props.onConfirm} />
            </footer>
        </Card>
    )
}

const ErrorModal = (props) => {
    return (
        <Wrapper>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} text={props.text} onConfirm={props.onConfirm} />, document.getElementById('overlay-root'))}
        </Wrapper>
    );
};

export default ErrorModal;
