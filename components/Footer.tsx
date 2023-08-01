export default function Footer() {
    const version = "Version"
    const theme = "theme"
    return (
        <footer>
            <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">GitHub</a></li>
                <li><a href="./about">About</a></li>
            </ul>
            <a href="#">{version}</a>
            <a href="#">{theme}</a>
        </footer>
    )
}