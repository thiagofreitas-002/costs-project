import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li className={styles.facebook}>
          <FaFacebook />
        </li>
        <li className={styles.instagram}>
          <FaInstagram />
        </li>
        <li className={styles.linkedin}>
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs &copy; 2021</span>
      </p>
    </footer>
  );
}

export default Footer;
