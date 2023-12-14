import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';

const SecurityTool = (): React.JSX.Element => {

    const {
        showLoading,
        openTool,
        openTN
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <div className={style.toolPage}>
                <h1>CS Security Tool</h1>
                <br />
                <h2>
                    This tool applies the necessary Carestream <strong>security policies</strong> per product to the local workstation. It is devided in Windows Defender, Windows Firewall and Windows Security.
                    <br />
                    <br />
                    Find more information in the<button className={style.linkToFile} onClick={() => openTN('securitytool')}>technews</button>.
                </h2>
                <br />
                    <p className={style.questionTitle}>What solves?</p>
                    <h2>
                    By updating the security policies of Windows, it would solve <strong>communication issue</strong> between folders, files, drivers and CSD units.
                    </h2>
                <br />
                <br />
                <br />
                <br />
                <div className={style.buttonContainer}>
            <button onClick={() => openTool('securitytool')}>
                Open the Tool
            </button>
            </div>
            </div>
            </>
    );
};

export default SecurityTool;