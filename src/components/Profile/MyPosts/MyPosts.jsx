import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message='сегодня все понял' likes='15' />
                <Post message='крутая штуковина!' likes='40' />
            </div>
        </div>
    )
}

export default MyPosts;