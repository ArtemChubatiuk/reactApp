import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let messagesElements = props.state.messages
        .map(message => <Message message={message.message}/>);
    let dialogsElements = props.state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let newPotElement = React.createRef();

    let addPost = () => {
        let text = newPotElement.current.value;
        alert(text);
    }

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>

                <div className={classes.messages}>
                    {messagesElements}
                </div>
            </div>
            <div>
                <div className={classes.textarea}>
                    <textarea style={{
                        width: 500,
                        height: 30
                    }} ref={newPotElement}></textarea>
                </div>
                <div className={classes.button}>
                    <button style={{
                        width: 100,
                        height: 20
                    }} onClick={addPost}>Отправить
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Dialogs;