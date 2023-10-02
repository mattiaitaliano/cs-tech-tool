import { faGear, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import style from "../static/components.module.scss"
import logo from "../static/img/icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
    return (
        <>
        <div className={style.headerBanner}>
            <img src={logo} className={style.bannerImg} />
            <span className={style.title}><b>CS</b> Technician Tool</span>
            <div className={style.options}>
            <button><FontAwesomeIcon icon={faGear} /></button>
            <button><FontAwesomeIcon icon={faCircleInfo} /></button>
            </div>
        </div>
        </>
    )
}