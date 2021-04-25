import React from "react";
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

/*
let classes = {
    'nav': 'Nav_nav__3_fWD',
    'item': 'Nav_item__2OCY2'
}
*/

const Nav = () => {
    return(
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/musing" activeClassName={classes.active}>Musing</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav;