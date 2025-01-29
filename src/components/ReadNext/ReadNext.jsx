import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import { getAllPostsAsync } from '../../store/postsSlice';
import ReadNextPost from './../ReadNext/ReadNextPost';

const ReadNext = (props) => {
const { limit=3, skip=0} = props;
const dispatch = useDispatch();
const {posts, error, isPending} = useSelector((state)=>(state.posts));
useEffect(()=>{
    dispatch(getAllPostsAsync({limit,skip}))
},[dispatch, limit, skip]);
const showPost = (post) =>

<ReadNextPost key={post.id} post={post} withPic={true} />

if (error) {
    return <p>{error}</p>
}
if (isPending) {
    return <p><Spinner/></p>
}
    return(
        <section>
             {posts.length === 0 ? <p>Post not found</p> : 
             <section>{posts.map(showPost)}
             </section>
}
        </section>
        
    )
    
};

ReadNext.propTypes = {
withPic: PropTypes.bool,
limit: PropTypes.number,
skip: PropTypes.number,
};


export default ReadNext;
