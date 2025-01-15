import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import { getAllTagsAsync } from '../../store/postsSlice';
import { Link } from 'react-router-dom';

const TagsList = () => {
    const dispatch = useDispatch();
    const {tags, error , isPending} = useSelector ((state)=>state.posts)
    useEffect(() => {
        dispatch(getAllTagsAsync())
    }, [dispatch]);

    const showTag = (tag) => <li key={tag}><Link to={`/single-post/tag/${tag}`}>{tag}</Link></li>
    
    if(error){return <p>{}error</p>};

    if(isPending){
        return <p><Spinner/></p>
    }
    
    
    
    return (
        <ul>
           {tags.map((showTag) )} 
        </ul>
    );
};



export default TagsList;
