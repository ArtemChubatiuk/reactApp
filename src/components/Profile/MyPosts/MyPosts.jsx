import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id:1, likes: 15, post: 'сегодня все понял'},
        {id:2, likes: 40, post: 'крутая штуковина!'},
    ]

    let postsElements =
        postData.map( p => <Post message={p.post} likes={p.likes}/>);

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;