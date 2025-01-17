import Menu from "../Menu/Menu";
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <h2>Finsweet</h2>
            <Menu/>
        </div>
    );
}

export default Footer;
