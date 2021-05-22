import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
/* <img src='https://images.drive.ru/i/0/5ec25bbcec05c47a52000012.jpg' />
* <img src='https://skolko-poluchaet.ru/wp-content/uploads/2018/08/f1.jpeg'
* */
const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.state.postData}
                     addPost={props.addPost}/>
        </div>
    )
}

export default Profile;