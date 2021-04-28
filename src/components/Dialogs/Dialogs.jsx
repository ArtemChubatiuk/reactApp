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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Artemy" id="1"/>
                <DialogItem name="Dmytro" id="2"/>
                <DialogItem name="Denisca" id="3"/>
                <DialogItem name="Evgeny" id="4"/>
                <DialogItem name="Vlados" id="5"/>
                <DialogItem name="Svyatoslav" id="6"/>
                <DialogItem name="Anka" id="7"/>
            </div>

            <div className={classes.messages}>
                <Message message="приветули"/>
                <Message message="как делишки?"/>
                <Message message="когда гулять?"/>
                <Message message="нормуль вот мой номер"/>
                <Message message="0976965736"/>
                <Message message="наберешь"/>
                <Message message="когда вийдешь!"/>
            </div>
        </div>
    )
}

export default Dialogs;