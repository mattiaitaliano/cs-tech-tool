import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';

const StartUp = (): React.JSX.Element => {

    const {
        showLoading,
        disableStartup
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <div className={style.toolPage}>
                <h1>Disable Fast Start-up</h1>
                <br />
                <h2>
                    This tool will disable the Windows' setting of <strong>Fast Start-Up</strong>, letting the PC having a proper shut down.
                </h2>
                <br />
                    <p className={style.questionTitle}>What solves?</p>
                    <h2>
                    It helps to resolve communication issue with <strong>Carestream Dental's units</strong> when the PC mantain old/bugged setting after a reeboting.
                    </h2>
                <br />
                <br />
                <br />
                <br />
                <div className={style.buttonContainer}>
            <button onClick={() => disableStartup()}>
                Disable Startup
            </button>
            </div>
            </div>
        </>
    );
};

export default StartUp;

