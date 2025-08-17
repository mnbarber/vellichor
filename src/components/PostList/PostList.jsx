import styles from './PostList.module.css';

const PostList = (props) => {
    return (
        <main className={styles.container}>
            {props.posts.map((post) => (
                    <article>
                        <header>
                            <h2>{post.title}</h2>
                        </header>
                        <p>{post.text}</p>
                    </article>
            ))}
        </main>
    );
};

export default PostList;