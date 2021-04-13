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
                <a>Profile</a>
            </div>
            <div className={classes.item}>
                <a>Messages</a>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Musing</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Nav;