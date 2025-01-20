import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSearchPostsAsync } from '../../../store/postsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../Spinner/Spinner';
import PostCard from '../PostCard';


const PostsSearchList = (props) => {
    const {q} = props;
    const dispatch = useDispatch();
    const {posts, isPending, error} = useSelector((state)=>state.posts);
const showPost = (post) => <PostCard key={post.id} post={post} />
    useEffect(() => {
    if(q){
dispatch(getSearchPostsAsync({q}))
    }
    }, [dispatch,q]);
    if(isPending){
        <Spinner/>
    };
    if (error) {
        return <p>{error}</p> 
    };

    return (
        <div>
            {posts.map(showPost)}
        </div>
    );
};


PostsSearchList.propTypes = {
q: PropTypes.string,
};


export default PostsSearchList;
