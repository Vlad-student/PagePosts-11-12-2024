import { Link } from "react-router-dom";
import PostsList from "../components/PostsList/PostsList";
import UsersList from "../components/UsersList/UsersList";
import CONSTANTS from "../store/constants";
import styles from './pages.module.scss'


const HomePage = () => {
    return (
        <div>
            <section >
                <div className={styles.line}>
                        <h2>All posts</h2>
                <Link to ='/single-post'>view all</Link>  
                </div>
          
                <PostsList limit={CONSTANTS.LIMIT_POSTS.at(1)}/>
            </section>
            <section>
                <h2>List of authors</h2>
            <UsersList/>
            </section>
         
        </div>
    );
}

export default HomePage;
