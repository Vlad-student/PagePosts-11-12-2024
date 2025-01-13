
import PropTypes from 'prop-types';


const CommentsList = (props) => {
    const {comments} =props;
    const showComment = (comment) => <li key={comment.id}>{comment.body}</li>
    return (
        <ul>
            {comments.map(showComment)}
        </ul>
    );
};


CommentsList.propTypes = {
comments: PropTypes.array,
};


export default CommentsList;
