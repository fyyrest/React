import React, {Component} from 'react';
import classes from './posts.module.css';
import MyButton from "../button/MyButton";

const PostItem = (props) => {

    return (
        <div className={classes.post}>
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => props.remove(props.post)}>Видалити</MyButton>
            </div>
        </div>
    );
}

export default PostItem;
