
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const PostCard = (props) => {
    const {post} = props;
    const navigate = useNavigate();
    const navigateToPostPage = () => {
        navigate(`/single-post/${post.id}`)
    }
    return (
        <article>
            <div onClick={navigateToPostPage}>
                <picture>
                    <source media='(min-width: 960px)' srcSet='/images/600x400.png' />
                    <img src="/images/300x200.png" alt="{post.title}" />
                </picture>
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
    }),

};


export default PostCard;
