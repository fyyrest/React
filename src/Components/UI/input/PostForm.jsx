import React, {Component, useState} from 'react';
import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

// метод для додавання нового посту 
const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
        ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
}

return (
    <form>
        <MyInput
            value={post.title}
            onChange={e => setPost({...post, title: e.target.value})}
            type="text"
            placeholder="Назва поста"/>
        <MyInput
            value={post.body}
            onChange={e => setPost({...post, body: e.target.value})}
            type="text"
            placeholder="Опис поста"/>
        <MyButton onClick={addNewPost}>Створити пост</MyButton>
    </form>
)
}

export default PostForm;
