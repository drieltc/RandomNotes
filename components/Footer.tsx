import styles from './Footer.module.css'
export default function Footer() {
    const version = "Version"
    const theme = "theme"
    return (
        <footer>
            <ul id={styles.ul}>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">GitHub</a></li>
                <li><a href="./about">About</a></li>
            </ul>
            <ul>
                <li><a href="#">{version}</a></li>
                <li><a href="#">{theme}</a></li>
            </ul>
        </footer>
    )
}