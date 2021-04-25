import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>Artemy</div>
                <div className={classes.dialog + ' ' + classes.active}>Dmytro</div>
                <div className={classes.dialog + ' ' + classes.active}>Denisca</div>
                <div className={classes.dialog + ' ' + classes.active}>Evgeny</div>
                <div className={classes.dialog + ' ' + classes.active}>Vlados</div>
                <div className={classes.dialog}>Svyatoslav</div>
                <div className={classes.dialog}>Anka</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you man?</div>
                <div className={classes.message}>Thx</div>
            </div>
        </div>
    )
}

export default Dialogs;