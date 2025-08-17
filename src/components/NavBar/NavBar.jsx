import { Link } from 'react-router';
import styles from './NavBar.module.css';

const NavBar = () => {

  return (
        <>
            <nav className={styles.container}>
                <h1>vellichor</h1>
                    <p>a digital journal</p>
                <ul>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/posts'>posts</Link></li>
                    <li><Link to='/posts/new'>new post</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
