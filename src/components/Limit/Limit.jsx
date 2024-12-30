import { PropTypes } from 'prop-types';
import styles from './Limit.module.scss';
import CONSTANTS from '../../store/constants';

const Limit = (props) => {
    const limits = CONSTANTS.LIMITS;
    const {limitUsers, changeLimitUsers} = props;
    const showOption = (limit) => <option key={limit}>{limit}</option>
    return (
            <div className={styles.right}>
                <select name="limitUsers" value={limitUsers} onChange={changeLimitUsers}>{limits.map(showOption)}</select>
            </div>
        
    );
}

Limit.propTypes = {
    limitUsers: PropTypes.number,
    changeLimitUsers: PropTypes.func,
}

export default Limit;
