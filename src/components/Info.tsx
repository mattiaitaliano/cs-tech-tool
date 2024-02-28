import style from '../static/components.module.scss';
import logo from '../static/img/icon.png'
import { open } from '@tauri-apps/api/shell';

const Info = (): React.JSX.Element => {

    const openInfotec = () => {
        open('https://infotec.carestreamdental.com/');
      }

    return (
        <>
            <div className={style.infoContainer}>
                
                <div className={style.infoTitle}>
                    <img src={logo} width="20px" height="20px" /> CS Technician Tool
                <br />
                <br />
                <p><strong>Version</strong>: <span>1.1.0 (beta)</span>
                    <br/>
                    <strong>Last update:</strong> <span>1st March 2024</span>
                
                </p>
                </div>

                <div className={style.infoContent}>
                    <strong>Disclaimer</strong>:
                    <br/>
                    <br />
                    This tool is exclusively for internal of Carestream Dental Support Representatives. It's designed to automate tasks and solutions after careful problem analysis. Only use these tools after considering its effects.
                    <br />
                    <br />
                    For any questions, contact Carestream Dental Service or visit the <a onClick={openInfotec}>Infotec</a> website and relative tool's Tech News.

                </div>


            </div>
        </>
    )
};

export default Info;