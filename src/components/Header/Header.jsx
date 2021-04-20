import React from "react";
import classes from './Header.module.css';
/*import pic from '../../phopo-1.jpg';*/
/*
 <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqsvxI-cGsF7dSoYBmfQ3ufH76ekG7d9FZTA&usqp=CAU' />
*/

const Header = () => {
    return(
        <header className={classes.header}>
            <img src='https://image.flaticon.com/icons/png/128/3162/3162261.png' />
            {/*<img src={pic} />*/}
        </header>
    )
};

export default Header;