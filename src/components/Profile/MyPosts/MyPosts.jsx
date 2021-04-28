import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let PostData = [
        {id:1, likes: 15, post: 'сегодня все понял'},
        {id:2, likes: 40, post: 'крутая штуковина!'},
    ]

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
                <Post message={PostData[0].post} likes={PostData[0].likes}/>
                <Post message={PostData[1].post} likes={PostData[1].likes}/>
            </div>
        </div>
    )
}

export default MyPosts;