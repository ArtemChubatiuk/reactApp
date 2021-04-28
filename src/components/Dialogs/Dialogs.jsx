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

    let DialogsData = [
        {id: 1, name: 'Artemy'},
        {id: 2, name: 'Dmytro'},
        {id: 3, name: 'Denisca'},
        {id: 4, name: 'Evgeny'},
        {id: 5, name: 'Vlados'},
        {id: 6, name: 'Svyatoslav'},
        {id: 7, name: 'Anka'}
    ]

    let MessageData = [
        {id: 1, message: 'приветули'},
        {id: 2, message: 'как делишки?'},
        {id: 3, message: 'когда гулять?'},
        {id: 4, message: 'нормуль вот мой номер'},
        {id: 5, message: '0976965736'},
        {id: 6, message: 'наберешь'},
        {id: 7, message: 'когда вийдешь!'}
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
            </div>

            <div className={classes.messages}>
                <Message message={MessageData[0].message}/>
                <Message message={MessageData[1].message}/>
            </div>
        </div>
    )
}

export default Dialogs;