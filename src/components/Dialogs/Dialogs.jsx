import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to="/dialogs/1" activeClassName={classes.active}>Artemy</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={classes.active}>Dmytro</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={classes.active}>Denisca</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4" activeClassName={classes.active}>Evgeny</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5" activeClassName={classes.active}>Vlados</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/6" activeClassName={classes.active}>Svyatoslav</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/7" activeClassName={classes.active}>Anka</NavLink>
                </div>
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