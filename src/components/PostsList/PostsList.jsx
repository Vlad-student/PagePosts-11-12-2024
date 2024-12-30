import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch , useSelector} from 'react-redux';
import Spinner from '../Spinner/Spinner';


const PostsList = () => {
    const dispatch = useDispatch();
    const {posts, error, isPending} = useSelector((state)=>state.posts);
    if(error){return <p>{}error</p>};

    if(isPending){
        return <p><Spinner/></p>
    }
    return posts.length === 0 ? <p>posts list is empty</p> : <section></section> };
 


PostsList.propTypes = {

};


export default PostsList;
