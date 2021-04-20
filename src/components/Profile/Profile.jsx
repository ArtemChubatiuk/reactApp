import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
/* <img src='https://images.drive.ru/i/0/5ec25bbcec05c47a52000012.jpg' />
* <img src='https://skolko-poluchaet.ru/wp-content/uploads/2018/08/f1.jpeg'
* */
const Profile = () => {
    return(
        <div>
            <div className={classes.background}>
                <img src='http://radikal.ru/F/s017.radikal.ru/i408/1111/95/a995b3869cca.jpg' />
            </div>
            <div className={classes.ava}>
                <img src='http://hypeava.ru/uploads/posts/2018-08/1534318246_5.jpg' />
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;