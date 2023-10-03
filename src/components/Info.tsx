import style from '../static/components.module.scss';
import logo from '../static/img/icon.png'

const Info = (): React.JSX.Element => {
    return (
        <>
            <div className={style.infoContainer}>
                
                <div className={style.infoTitle}>
                    <img src={logo} width="20px" height="20px" /> CS Technician Tool
                <br />
                <br />
                <p><strong>Version</strong>: <span>1.0.0</span>
                    <br/>
                    <strong>Last update:</strong> <span>5th October 2023</span>
                
                </p>
                </div>

                <div className={style.infoContent}><strong>Disclaimer</strong>:
                <br/>
                This tool is on
                </div>


            </div>
        </>
    )
};

export default Info;