import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "../static/components.module.scss"
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <>
           <nav className={style.navbar}>
            <ul>
                <li>
                <a href="/home">
                <FontAwesomeIcon icon={faHome} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</a>
                </li>
                <li>
                <a href="/product">Products</a>
                </li>
                <li>
                <a href="/links">Utility</a>
                </li>
                <li>
                <a href="https://infotec.carestreamdental.com/pub/index.php" target="_blank">Links</a>
                </li>
            </ul>
            </nav>
        </>
    )
}