import { useState } from "react";
import styles from './PostForm.module.css';

const PostForm = (props) => {
    const [postData, setPostData] = useState({
        title: "",
        content: "",
        mood: "",
        date: new Date().toISOString().split("T")[0],
    });

    const handleChange = (evt) => {
        setPostData({ ...postData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleAddPost(postData);
    }
    
    return (
        <main className={styles.container}>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="title"
            value={postData.title}
            onChange={handleChange}
            placeholder="title"
            required
        />
        <textarea
            name="content"
            value={postData.content}
            onChange={handleChange}
            placeholder="content"
            required
        />
        <input
            type="date"
            name="date"
            value={postData.date}
            onChange={handleChange}
        />
        <input
            type="mood"
            name="mood"
            value={postData.mood}
            onChange={handleChange}
            placeholder="mood"
        />
        <button type="submit">Save</button>
        </form>
        </main>
    );
}

export default PostForm;