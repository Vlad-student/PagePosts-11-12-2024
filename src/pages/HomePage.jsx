import { Link } from "react-router-dom";
import PostsList from "../components/PostsList/PostsList";
import UsersList from "../components/UsersList/UsersList";
import CONSTANTS from "../store/constants";
import styles from './pages.module.scss'
import FeaturePost from "../components/FeaturePost/FeaturePost";
import TagsList from "../components/TagsList/TagsList";
import ReadNext from "../components/ReadNext/ReadNext";


const HomePage = () => {
    return (
        <div>
            <section className={styles.relative}>
                <FeaturePost imgPosition='under'/>
                </section>
            <section className={styles['all-posts']} >
                <div className={styles['featured-post']}>
                    <h2>Featured Post</h2>
                    <FeaturePost imgPosition='over'/>
                    </div>
                    <div>
  <div className={styles.line}>
                        <h2>All posts</h2>
                <Link to ='/single-post'>view all</Link>  
                </div>
                <PostsList limit={CONSTANTS.LIMIT_POSTS.at(1)}/>
                    </div>
            </section>
            <section>
                <h2>List of authors</h2>
            <UsersList/>
            </section>

            <section>
                <h2>choose a tag</h2>
                <TagsList/>
            </section>
             
             <section>
                <h1>What to read next</h1>
                       <ReadNext  />
                
                 

           
             </section>
         
        </div>
    );
}

export default HomePage;
