import style from '../static/components.module.scss';

const Links = ():React.JSX.Element => {
    return (
        <div className={style.toolContainer}>
            <div className={style.toolCardItem}>Infotec</div>
            <div className={style.toolCardItem}>eParts</div>
            <div className={style.toolCardItem}>Activation</div>
            <div className={style.toolCardItem}>Status</div>

            <div className={style.toolCardItem}>Carestream</div>
            <div className={style.toolCardItem}>Mail</div>


        </div>
    )
};

export default Links;