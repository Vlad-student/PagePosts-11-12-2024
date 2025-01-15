import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPostsByTagAsync } from '../../store/postsSlice';
import Spinner from '../Spinner/Spinner';
import PostCard from '../PostsList/PostCard';
import { PropTypes } from 'prop-types';


const TagPosts = (props) => {
    const {tagName} = props;
    const dispatch = useDispatch();
    const {postByTag, error, isPending} = useSelector((state)=>state.posts);
    useEffect(() => {
    dispatch(getAllPostsByTagAsync(tagName))
    }, [dispatch,tagName]);
const showPost = (post) => <PostCard post={post} withPic />;
console.log(postByTag);

    if(error){return <p>{}error</p>};

    if(isPending){
        return <p><Spinner/></p>
    }
    return (
        <div>
           {postByTag.map(showPost)}
        </div>
    );
};


TagPosts.propTypes = {
tagName: PropTypes.string,

};


export default TagPosts;
