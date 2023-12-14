import React, { useState } from 'react';

import style from '../static/components.module.scss';
import { open } from '@tauri-apps/api/shell';

import infotec from '../static/img/links/infotec.png';
import eparts from '../static/img/links/eparts.png';
import activation from '../static/img/links/activation.png';
import status from '../static/img/links/status.png';
import activationForm from '../static/img/links/activationForm.png';
import zoho from '../static/img/links/zoho.png';
import toolhub from '../static/img/links/toolhub.png';
import easyvista from '../static/img/links/easyvista.png';

import iconInfotec from '../static/img/links/icons/infotec.png';
import iconEparts from '../static/img/links/icons/eparts.png';
import iconActivation from '../static/img/links/icons/activation.png';
import iconStatus from '../static/img/links/icons/status.png';
import iconActivationForm from '../static/img/links/icons/activationForm.png';
import iconZoho from '../static/img/links/icons/zoho.png';
import iconToolhub from '../static/img/links/icons/toolhub.png';
import iconEasyvista from '../static/img/links/icons/easyvista.png';


const Links = ():React.JSX.Element => {

    const [isIconActive, setIsIconActive] = useState(false);

    const imagesMap: ImagesMapType = {
        infotec: isIconActive ? iconInfotec : infotec,
        eparts: isIconActive ? iconEparts : eparts,
        activation: isIconActive ? iconActivation : activation,
        status: isIconActive ? iconStatus : status,
        activationForm: isIconActive ? iconActivationForm : activationForm,
        zoho: isIconActive ? iconZoho : zoho,
        toolhub: isIconActive ? iconToolhub : toolhub,
        easyvista: isIconActive ? iconEasyvista : easyvista,
    };

    const renderImage = (imageName: string) => (
        <img src={imagesMap[imageName]} />
    );

    const openInfotec = () => {
        open('https://infotec.carestreamdental.com/');
      };

    const openEparts = () => {
        open('https://eparts.carestreamdental.com/');
      };

    const openActivation = () => {
        open('https://csactivation.carestreamdental.com/');
      };

    const openStatus = () => {
        open('https://csdental.statuspage.io/');
      };
    
    
    const openActivationForm = () => {
        open('https://forms.office.com/Pages/ResponsePage.aspx?id=4nVlFB8aNEysEa5W1rguO_BnHZIIRcRFs5MT-wox9c5UQ0U0V0owNVNJTlAxM0IyS1pIOTgyS0ZRTS4u');
    };

    const openZoho = () => {
        open('https://accounts.zoho.com/signin?servicename=ZohoAssist&serviceurl=https%3A%2F%2Ftech.csdental.com%3A443%2Fapp');
    };

    const openToolsHub = () => {
        open('https://csdental.sharepoint.com/sites/SupportToolsHub');
    };

    const openEV = () => {
        open('https://csdental.easyvista.com/custom/evsh_csdental/#Csdental_Production/CSDKB');
    };

    return (
        <>
        <div className={style.toolContainer}>
            
            <a onClick={openInfotec}>
            <div className={style.toolCardItem}>
                <div className={style.cardTitle}>Infotec</div>
                <div className={style.cardContent}>
                    {renderImage('infotec')}
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
                    {renderImage('eparts')}
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
                    {renderImage('activation')}
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
                    {renderImage('status')}
                <div className={style.cardContentOverlay}>
                    <br />
                    <br />
                    CSD Server Status Check<br /><br />Check the status of the various Carestream Dental services up to date and their history.
                </div>
                </div>
            </div>
            </a>

            <a onClick={openActivationForm}>
            <div className={style.toolCardItem}>
                <div className={style.cardTitle}>Reactivation Request</div>
                <div className={style.cardContent}>
                    {renderImage('activationForm')}
                <div className={style.cardContentOverlay}>
                    <br />
                    <br />
                    License Reactivation Request<br /><br />Open a form you can use to request for a product license reactivation.
                </div>
                </div>
            </div>
            </a>
        
{/* =================================== SECOND ROW ================================================= */}


            <a onClick={openZoho}>
            <div className={style.toolCardItem}>
                <div className={style.cardTitle}>Zoho Support</div>
                <div className={style.cardContent}>
                    {renderImage('zoho')}
                <div className={style.cardContentOverlay}>
                    <br />
                    <br />
                    Remote Support Zoho<br /><br />Open a remote session with the tech, connect to his devices and chat with him.
                </div>
                </div>
            </div>
            </a>

            <a onClick={openToolsHub}>
            <div className={style.toolCardItem}>
                <div className={style.cardTitle}>Tools Hub</div>
                <div className={style.cardContent}>
                    {renderImage('toolhub')}
                <div className={style.cardContentOverlay}>
                    <br />
                    <br />
                    Support Tools Hub<br /><br />Open the internal Support Tools Hub with all the information about last news for the support.
                </div>
                </div>
            </div>
            </a>
            
            <a onClick={openEV}>
            <div className={style.toolCardItem}>
                <div className={style.cardTitle}>Easyvista</div>
                <div className={style.cardContent}>
                    {renderImage('easyvista')}
                <div className={style.cardContentOverlay}>
                    <br />
                    <br />
                    Easyvista<br /><br />Open the internal Easyvista database and check the articles for CSD errors and procedure.
                </div>
                </div>
            </div>
            </a>

            <div className={`toggleButton ${isIconActive ? 'active' : ''}`} onClick={() => setIsIconActive(!isIconActive)}>
            <span className="toggleText">{isIconActive ? 'Previews' : 'Icons'}</span>
            </div>

        </div>

        <div className="toggleContainer">Ciao</div>

        

        
    </>
    )
};

export default Links;


type ImagesMapType = {
    [key: string]: string;
};