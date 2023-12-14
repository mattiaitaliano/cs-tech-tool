import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';

const CsdmLiteReset = (): React.JSX.Element => {

    const {
        showLoading,
        openTool,
        openTN
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <div className={style.toolPage}>
                <h1>SQL Table Remover</h1>
                <br />
                <h2>
                This tool resets CS Imaging 8's <strong>SQL database</strong> on the local computer. It removes duplicate patient records, preventing issues in DPMS.
                    <br />
                    <br />
                    Find more information in the<button className={style.linkToFile} onClick={() => openTN('sqltableremover')}>technews</button>.
                </h2>
                <br />
                    <p className={style.questionTitle}>What solves?</p>
                    <h2>
                    This tool solves problems related to launching CSI in DPMS, errors such ass CSI_10206 and allows for a fresh migration of patient data.
                    </h2>
                <br />
                <br />
                <br />
                <br />
                <div className={style.buttonContainer}>
            <button onClick={() => openTool('sqltableremover')}>
                Open Tool
            </button>
            </div>
            </div>
            </>
    );
};

export default CsdmLiteReset;