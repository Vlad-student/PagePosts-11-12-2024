import UsersList from "../components/UsersList/UsersList";
import styles from './pages.module.scss'

const BlogPage = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Autors</h1>
            <UsersList/>
        </div>
    );
}

export default BlogPage;
