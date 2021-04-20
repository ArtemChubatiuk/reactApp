import React from "react";
import classes from './Nav.module.css';

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
                <a href="/profile">Profile</a>
            </div>
            <div className={classes.item}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={classes.item}>
                <a href="/news">News</a>
            </div>
            <div className={classes.item}>
                <a href="/musing">Musing</a>
            </div>
            <div className={classes.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    )
}

export default Nav;