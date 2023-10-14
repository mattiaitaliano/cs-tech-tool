import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';

const InstallCPP = (): React.JSX.Element => {

    const {
        showLoading,
        installCpp
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <div className={style.toolPage}>
                <h1>Install Visual C++</h1>
                <br />
                <h2>
                    This tool will install on the current PC the <strong>Visual C++</strong> from Microsoft.
                </h2>
                <br />
                    <p className={style.questionTitle}>What solves?</p>
                    <h2>
                    It helps with error message related to files <strong>.dll</strong> both about <strong>windows</strong>and <strong>Carestream Dental</strong> products.
                    </h2>
                <br />
                <br />
                <br />
                <br />
                <div className={style.buttonContainer}>
            <button onClick={() => installCpp()}>
                Install C++
            </button>
            </div>
            </div>
        </>
    );
};

export default InstallCPP;