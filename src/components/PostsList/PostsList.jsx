import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch , useSelector} from 'react-redux';
import Spinner from '../Spinner/Spinner';
import { getAllPostsAsync } from '../../store/postsSlice';
import PostCard from './PostCard';
import CONSTANTS from '../../store/constants';


const PostsList = (props) => {
    const {withPic, limit, skip=0} = props;
    const dispatch = useDispatch();
    const limitPosts = CONSTANTS.LIMIT_POSTS.at(3);
    const {posts, error, isPending} = useSelector((state)=>state.posts);
    useEffect(()=>{
        dispatch(getAllPostsAsync({limit,skip}))
    },[dispatch,limit, skip]);
const showPost = (post) =><PostCard key={post.id} post={post} withPic= {withPic} limit= {limitPosts}  />;

    if(error){return <p>{}error</p>};

    if(isPending){
        return <p><Spinner/></p>
    }
    return posts.length === 0 ? <p>posts list is empty</p> : <section>{posts.map(showPost)}</section> };
 


PostsList.propTypes = {
withPic: PropTypes.bool,
limit: PropTypes.number,
skip: PropTypes.number, 
};


export default PostsList;


