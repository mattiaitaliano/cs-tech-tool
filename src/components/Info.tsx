import style from '../static/components.module.scss';
import logo from '../static/img/icon.png'
import { open } from '@tauri-apps/api/shell';

const Info = (): React.JSX.Element => {

    const openInfotec = () => {
        open('https://infotec.carestreamdental.com/');
      }

      const mailSupport = () => {
            window.open('mailto:techdental@csdental.com');
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
                    For any questions, contact <a onClick={mailSupport}>Carestream Dental Support</a> or visit the <a onClick={openInfotec}>Infotec</a> website.

                </div>


            </div>
        </>
    )
};

export default Info;