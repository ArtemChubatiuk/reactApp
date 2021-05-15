import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements =
        props.postData.map( p => <Post message={p.post} likes={p.likes}/>);

    let newPotElement =React.createRef();

    let addPost = () => {
        let text = newPotElement.current.value;
        alert(text);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPotElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;