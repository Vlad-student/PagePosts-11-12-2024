import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import { getAllTagsAsync } from '../../store/postsSlice';


const TagsList = () => {
    const dispatch = useDispatch();
    const {tags, error , isPending} = useSelector ((state)=>state.posts)
    useEffect(() => {
        dispatch(getAllTagsAsync())
    }, [dispatch]);
    
    if(error){return <p>{}error</p>};

    if(isPending){
        return <p><Spinner/></p>
    }
    
    
    
    return (
        <ul>
           {tags.map((tag)=>(
           <li key={tag}>{tag}</li>
           )
        )} 
        </ul>
    );
};



export default TagsList;
