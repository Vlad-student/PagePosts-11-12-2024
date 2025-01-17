import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllCommentsByPostAsync, getOnePostAsync } from '../../store/postsSlice';
import CommentsList from '../CommentsList/CommentsList';
import { getOneUser } from './../../api/index';
import { Icon } from '@mdi/react';
import { mdiThumbUpOutline, mdiThumbDownOutline } from '@mdi/js';
import styles from './PostDetails.module.scss';


const PostDetails = () => {
  
const dispatch = useDispatch();
const {postId} = useParams();
const {selectedPost, comments, error, isPending} = useSelector(state=>state.posts);

const [author, setAuthor] = useState('');
const [avatar, setAvatar] = useState('');

useEffect(()=>{
    dispatch(getOnePostAsync(postId));
    dispatch(getAllCommentsByPostAsync(postId));
},[dispatch, postId]);


useEffect(() => {
    const showAuthor = async () => {
try {
    const response =  await getOneUser(selectedPost.userId) ;
          setAuthor(`${response.data.firstName} ${response.data.lastName}`)
          setAvatar(`${response.data.image}`);
} catch (error) {
    console.log(error);
    setAuthor('Anonim')
    setAvatar('/images/aninim.png')
}
    }
    if(selectedPost){showAuthor();}
}, [selectedPost]);


if (error){
return <p>error</p>
}

if(isPending){
return <p>Loading</p>
}

if(!selectedPost){
return <p>Post not found</p>
}

    return (
        <article>
            <div>
                <div>
                <img className={styles.avatar} src={avatar}  />
                <p>{author} ({selectedPost.userId})</p>
<p>views: {selectedPost.views} </p>
            </div>
            <div>
                <Icon size ={1} path={mdiThumbUpOutline} />  {selectedPost.reactions.likes}
                <Icon size ={1} path={mdiThumbDownOutline} /> {selectedPost.reactions.dislikes}
            </div>
            </div>
            
          
            <h1>{selectedPost.title}</h1>
            <picture>
                <img src ='/images/1600x1200.png'/>
            </picture>
            <p>{selectedPost.body}</p>
            <h3>Comments:</h3>
            {comments.length === 0 ? <p>empty comments list</p> : <CommentsList comments={comments}/> }
        </article>
    );
}



export default PostDetails;
