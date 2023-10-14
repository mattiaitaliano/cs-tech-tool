import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';

const Firewall = (): React.JSX.Element => {

    const {
        showLoading,
        openFirewall,
        openExceptions
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <div className={style.toolPage}>
                <h1>Open CSD's Firewall Ports</h1>
                <br />
                <h2>
                    This tool will open the firewall ports needed by <strong>Carestream Dental</strong> Softwares or Equipments.
                </h2>
                <br />
                    <p className={style.questionTitle}>What solves?</p>
                    <h2>
                    Could fix possible issues in opening <strong>CSD softwares</strong> or <strong>equipment</strong> communication. In case of Antivirus, give to <button className={style.linkToFile} onClick={() => openExceptions()}>these folders</button> the listed exceptions.
                    </h2>
                <br />
                <br />
                <br />
                <br />
                <div className={style.buttonContainer}>
                <button onClick={() => openFirewall()}>
                Open Firewall
            </button>
            </div>
            </div>
        </>
    );
};

export default Firewall;

