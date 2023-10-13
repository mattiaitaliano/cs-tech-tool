import style from '../static/components.module.scss';
import { open } from '@tauri-apps/api/shell';

import infotec from '../static/img/links/infotec.png';
import eparts from '../static/img/links/eparts.png';
import activation from '../static/img/links/activation.png';
import status from '../static/img/links/status.png';
import csdental from '../static/img/links/csdental.png';
import mailto from '../static/img/links/mailto.png';
import bomgar from '../static/img/links/bomgar.png';
import activationForm from '../static/img/links/activationForm.png';


const Links = ():React.JSX.Element => {

    const openInfotec = () => {
        open('https://infotec.carestreamdental.com/');
      }

    const openEparts = () => {
        open('https://eparts.carestreamdental.com/');
      }

    const openActivation = () => {
        open('https://csactivation.carestreamdental.com/');
      }

    const openStatus = () => {
        open('https://csdental.statuspage.io/');
      }
    
    const openCSD = () => {
        open('https://www.carestreamdental.com/');
      }
    
    const openMail = () => {
        window.open('mailto:techdental@csdental.com');
      }

    const openBomgar = () => {
        open('https://cssupport.csdental.com/');
      }

    const openActivationForm = () => {
    open('https://forms.office.com/Pages/ResponsePage.aspx?id=4nVlFB8aNEysEa5W1rguO_BnHZIIRcRFs5MT-wox9c5UQ0U0V0owNVNJTlAxM0IyS1pIOTgyS0ZRTS4u');
    }
      

    return (
        <>
        <div className={style.toolContainer}>
            
            <a onClick={openInfotec}>
            <div className={style.toolCardItem}>
                <div className={style.cardTitle}>Infotec</div>
                <div className={style.cardContent}>
                    <img src={infotec} />
                <div className={style.cardContentOverlay}>
                    <br />
                    <br />
                    Carestream Dental Infotec's Portal<br /><br />Softwares, Drivers, Technews and Documentations.
                </div>
                </div>
            </div>
            </a>

            <a onClick={openEparts}>
            <div className={style.toolCardItem}>
                <div className={style.cardTitle}>eParts</div>
                <div className={style.cardContent}>
                    <img src={eparts} />
                <div className={style.cardContentOverlay}>
                    <br />
                    <br />
                    Carestream Dental Part's Portal<br /><br />Spare part codes for each CS product with the exchange manual. Check the availability.
                </div>
                </div>
            </div>
            </a>

            <a onClick={openActivation}>
            <div className={style.toolCardItem}>
                <div className={style.cardTitle}>Activation</div>
                <div className={style.cardContent}>
                    <img src={activation} />
                <div className={style.cardContentOverlay}>
                    <br />
                    <br />
                    Carestream Dental Activation's Portal<br /><br />Register account and activate the product. Download the latest activation client.
                </div>
                </div>
            </div>
            </a>

            <a onClick={openStatus}>
            <div className={style.toolCardItem}>
                <div className={style.cardTitle}>Status</div>
                <div className={style.cardContent}>
                    <img src={status} />
                <div className={style.cardContentOverlay}>
                    <br />
                    <br />
                    CSD Server Status Check<br /><br />Check the status of the various Carestream Dental services up to date and their history.
                </div>
                </div>
            </div>
            </a>

            <a onClick={openCSD}>
            <div className={style.toolCardItem}>
                <div className={style.cardTitle}>Carestream</div>
                <div className={style.cardContent}>
                <img src={csdental} />
            <div className={style.cardContentOverlay}>
                    <br />
                    <br />
                    Carestream Dental's Website <br /><br />All the information about Carestream Dental, Contact and Products information.
                </div>
                </div>
            </div>
            </a>

            <a onClick={openMail}>
            <div className={style.toolCardItem}>
                <div className={style.cardTitle}>Mail</div>
                <div className={style.cardContent}>
                    <img src={mailto} />
                <div className={style.cardContentOverlay}>
                    <br />
                    <br />
                    Send an email to techdental@csdental.com <br /><br />It will open the default email application of the current system.
                </div>
                </div>
            </div>
            </a>

            <a onClick={openBomgar}>
            <div className={style.toolCardItem}>
                <div className={style.cardTitle}>Bomgar</div>
                <div className={style.cardContent}>
                    <img src={bomgar} />
                <div className={style.cardContentOverlay}>
                    <br />
                    <br />
                    Bomgar remote support <br /><br />Connect with a Carestream Dental Support Representative by inserting the provided key.
                </div>
                </div>
            </div>
            </a>

            <a onClick={openActivationForm}>
            <div className={style.toolCardItem}>
                <div className={style.cardTitle}>Reactivation Request</div>
                <div className={style.cardContent}>
                    <img src={activationForm} />
                <div className={style.cardContentOverlay}>
                    <br />
                    <br />
                    License Reactivation Request<br /><br />Open a form you can use to request for a product license reactivation.
                </div>
                </div>
            </div>
            </a>

        </div>
    </>
    )
};

export default Links;