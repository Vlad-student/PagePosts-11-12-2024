import PropTypes from 'prop-types';
import styles from './User.module.scss';

const UserCard = (props) => {
    const {user} = props;
    return (
        <article className={styles ['user-card']}>
             <div > <img src={user.image} alt="" />
            <h3>{user.firstName} {user.lastName} </h3>
            <p>{user.company.title} @{user.company.department} </p>
            </div>
        </article>
      
    )};

UserCard.propTypes = {
    user: PropTypes.shape({
        image: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        company: PropTypes.shape({
            title: PropTypes.string,
            department: PropTypes.string,
        })
    })
}

export default UserCard;
