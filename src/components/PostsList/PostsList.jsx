import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch , useSelector} from 'react-redux';
import Spinner from '../Spinner/Spinner';
import { getAllPostsAsync } from '../../store/postsSlice';
import PosrCard from './PostCard';


const PostsList = (props) => {
    const {withPic, limit, skip=0} = props;
    const dispatch = useDispatch();
    const {posts, error, isPending} = useSelector((state)=>state.posts);
    useEffect(()=>{
        dispatch(getAllPostsAsync({limit,skip}))
    },[dispatch,limit, skip]);
const showPost = (post) =><PosrCard key={post.id} post={post} withPic= {withPic}  />;

    if(error){return <p>{}error</p>};

    if(isPending){
        return <p><Spinner/></p>
    }
    return posts.length === 0 ? <p>posts list is empty</p> : <section>{posts.map(showPost)}</section> };
 


PostsList.propTypes = {
withPic: PropTypes.bool,
};


export default PostsList;


