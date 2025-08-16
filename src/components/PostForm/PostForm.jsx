import { useState, useEffect } from "react";
import styles from './PostForm.module.css';

const PostForm = (props) => {
    const [post, setPost] = useState({
        title: "",
        content: "",
        mood: "",
        date: new Date().toISOString().split("T")[0],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(e, post);
        setPost({
            title: "",
            content: "",
            date: new Date().toISOString().split("T")[0],
        });
    }
    
    return (
        <main className={styles.container}>
        <form onSubmit={(e) => props.handleSubmit(e, post)}>
        <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
            placeholder="title"
            required
        />
        <textarea
            name="content"
            value={post.content}
            onChange={handleChange}
            placeholder="content"
            required
        />
        <input
            type="date"
            name="date"
            value={post.date}
            onChange={handleChange}
        />
        <input
            type="mood"
            name="mood"
            value={post.mood}
            onChange={handleChange}
        />
        <button type="submit">Save</button>
        </form>
        </main>
    );
}

export default PostForm;