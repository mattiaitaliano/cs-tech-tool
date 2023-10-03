import style from '../static/components.module.scss';
import logo from '../static/img/icon.png'
import { invoke } from '@tauri-apps/api/tauri';

const Info = (): React.JSX.Element => {

    function openLink() {
        invoke('open_url', { url: 'https://infotec.carestreamdental.com/' });
      }

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

                <div className={style.infoContent}>
                    <strong>Disclaimer</strong>:
                    <br/>
                    <br />
                    This tool is exclusively for certified Carestream Dental technicians. It does not replace individual technician troubleshooting or Carestream Dental support. It's designed to automate tasks and solutions after careful problem analysis. Only use this tool after considering its effects.
                    <br />
                    <br />
                    For any questions, contact Carestream Dental support or visit the <a onClick={openLink}>Infotec</a> website.

                </div>


            </div>
        </>
    )
};

export default Info;