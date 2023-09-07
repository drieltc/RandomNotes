import styles from './Header.module.css'
export default function Header() {
    return (
        <header>
            <ul id={styles.ul}>
                <li><a href="./">Play</a></li>
                <li><a href="./about">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
    )
}