import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import styles from './FeaturePost.module.scss'


const FeaturePost = (props) => {
    const {imgPosition} = props;
    const {posts} =  useSelector((store)=>store.posts)
    const [featurePost, setFeaturePost] = useState(null);

    useEffect(()=>{
        if(posts.length>0){
           const sortedPost = [...posts].sort((post1, post2) => post1.views - post2.views); 
        
        setFeaturePost(sortedPost.at(0));}
    },[posts]);

    if(!featurePost){
        return <Spinner/>
    }

return(
    <>
    {imgPosition === 'under'  && <div>
        <img className={styles['full-screen']} src={'/images/1600x1200.png'} />
    </div>}
    <article className={styles['featured-blog']}>
    <div>
          {imgPosition === 'over' && <img src ={'/images/600x400.png'}/>}
<h2>{featurePost.title}</h2>
<p>{featurePost.body.slice(0,100)}...</p>
<button><Link to={`/posts/$featuredPost.id`}>Read more</Link></button> 
    </div>
 {imgPosition === 'right' && <img src ={'/images/600x400.png'}/>}
</article>
    </>
    
) ;
};




FeaturePost.propTypes = {
imgPosition:PropTypes.string,
};


export default FeaturePost;
