import style from '../static/components.module.scss';
import { NavLink } from 'react-router-dom';

import csimaging from '../static/img/products/csimaging.png';


const Products = ():React.JSX.Element => {

    return (
        <>
        <div className={style.toolContainer}>
            
            <NavLink to='/'>
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
                    - Computer IP
                </div>
                </div>
            </div>
            </NavLink>
        </div>
    </>
    );
};

export default Products;