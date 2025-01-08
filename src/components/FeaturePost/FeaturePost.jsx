import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";


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

return <article>
    {imgPosition === 'over' && <img src ={'/images/600x400.png'}/>}
<h2>{featurePost.title}</h2>
<p>{featurePost.body}</p>
<button><Link to={`/posts/$featuredPost.id`}>Read more</Link></button>
</article>;
}




FeaturePost.propTypes = {
imgPosition:PropTypes.string,
};


export default FeaturePost;
