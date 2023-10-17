import style from '../static/components.module.scss';
import { NavLink } from 'react-router-dom';

import csimaging from '../static/img/products/csimaging.png';
import activation from '../static/img/products/activation.png';
import windows from '../static/img/products/windows.png';


const Products = ():React.JSX.Element => {

    return (
        <>
        <div className={style.toolContainer}>
            
            <NavLink to='/csimaging/' className={style.linkToView}>
            <div className={style.toolCardItem}>
                <div className={style.cardTitle}>CS Imaging</div>
                <div className={style.cardContent}>
                    <img src={csimaging} />
                <div className={style.cardContentOverlay}>
                    <br />
                    <br />
                    Tools:
                    <br />
                    <br />
                    - Delete nbus.data
                    <br />
                    - DB full permission
                    <br />
                    - Clean Installation
                </div>
                </div>
            </div>
            </NavLink>

            <NavLink to='/activation/' className={style.linkToView}>
            <div className={style.toolCardItem}>
                <div className={style.cardTitle}>CS Activation</div>
                <div className={style.cardContent}>
                    <img src={activation} />
                <div className={style.cardContentOverlay}>
                    <br />
                    <br />
                    Tools:
                    <br />
                    <br />
                    - Reset Client
                </div>
                </div>
            </div>
            </NavLink>

            <NavLink to='/windows/' className={style.linkToView}>
            <div className={style.toolCardItem}>
                <div className={style.cardTitle}>Windows</div>
                <div className={style.cardContent}>
                    <img src={windows} />
                <div className={style.cardContentOverlay}>
                    <br />
                    <br />
                    Tools:
                    <br />
                    <br />
                    - Show IP
                    <br />
                    - Fast Start up
                </div>
                </div>
            </div>
            </NavLink>

        </div>
    </>
    );
};

export default Products;