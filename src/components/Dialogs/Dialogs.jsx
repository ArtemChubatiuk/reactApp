import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={classes.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Artemy'},
        {id: 2, name: 'Dmytro'},
        {id: 3, name: 'Denisca'},
        {id: 4, name: 'Evgeny'},
        {id: 5, name: 'Vlados'},
        {id: 6, name: 'Svyatoslav'},
        {id: 7, name: 'Anka'}
    ]
    let dialogsElements = dialogs
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );

    let messages = [
        {id: 1, message: 'приветули'},
        {id: 2, message: 'как делишки?'},
        {id: 3, message: 'когда гулять?'},
        {id: 4, message: 'нормуль вот мой номер'},
        {id: 5, message: '0976965736'},
        {id: 6, message: 'наберешь'},
        {id: 7, message: 'когда вийдешь!'}
    ]
    let messagesElements = messages
        .map( message => <Message message={message.message}/> );

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>

            <div className={classes.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;