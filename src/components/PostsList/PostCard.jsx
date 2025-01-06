
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { getOneUser } from '../../api';
import styles from './PostList.module.scss'


const PostCard = (props) => {
    const {post, withPic} = props;
const [author, setAuthor] = useState(null);

    const navigate = useNavigate();
    const navigateToPostPage = () => {
        navigate(`/single-post/${post.id}`)
    }

useEffect(() => {
    const loadUser = async () => {
        try {
          const response =  await getOneUser(post.userId) ;
          setAuthor(`${response.data.firstName} ${response.data.lastName}`)
        } catch (error) {
            console.log(error);
            setAuthor('Anonim')
        }
    }
    loadUser()
}, [post.userId]);

const stopPropagation = (event) =>{
    event.stopPropagation();
}

    return (
        <article className={styles['post-card']}>
            <div onClick={navigateToPostPage}>
                {withPic && <picture>
                    <source media='(min-width: 960px)' srcSet='/images/600x400.png' />
                    <img src="/images/300x200.png" alt="{post.title}" />
                </picture>}
                <p> By <Link to={`/users/${post.userId}`} onClick={stopPropagation} > {author}</Link> </p>
              <h2>{post.title}</h2>
            <p>{post.body.slice(0, 80)}...</p>  
            </div>
            
        </article>
    );
};


PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number ,
       title:PropTypes.string,
       body: PropTypes.string, 
       userId: PropTypes.number,
    }),
withPic: PropTypes.bool,
};


export default PostCard;
