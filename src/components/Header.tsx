import { faGear, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import style from "../static/components.module.scss"
import logo from "../static/img/icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ onOpenOverlay}: HeaderProps ): React.JSX.Element => {
    return (
        <>
        <div className={style.headerBanner}>
            <img src={logo} className={style.bannerImg} />
            <span className={style.title}><b>CS</b> Technician Tool</span>
            <div className={style.options}>
            {/* <button onClick={onOpenOverlay}><FontAwesomeIcon icon={faGear} /></button> */}
            <button onClick={onOpenOverlay}><FontAwesomeIcon icon={faCircleInfo} /></button>
            </div>
        </div>
        </>
    )
};

interface HeaderProps {
    onOpenOverlay: () => void;
};

export default Header;