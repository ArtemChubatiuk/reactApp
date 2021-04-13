import React from "react";
import classes from './Post.module.css'

const Post = () => {
    return(
        <div className={classes.item}>
            <img src='https://pro.bbcdn.io/46/46404bc5-1d69-48a0-8379-815358504efe?rule=news-large' />
            сегодня все понял
            <div>
                <span>like 👍</span>
            </div>
        </div>
    )
}

export default Post;