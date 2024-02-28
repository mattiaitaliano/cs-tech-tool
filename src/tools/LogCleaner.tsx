import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';

const LogCleaner = (): React.JSX.Element => {

    const {
        showLoading,
        openTool,
        openTN
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <div className={style.toolPage}>
                <h1>Log Cleaner</h1>
                <br />
                <h2>
                This tool delete from the Carestream's Folders on the local computer, some of the <strong>log files</strong> not used by the Service Team.
                    <br />
                </h2>
                <br />
                    <p className={style.questionTitle}>What solves?</p>
                    <h2>
                    This tool remove all the logs not used in troubleshooting. To be used before producing the Traces Files.
                    </h2>
                <br />
                <br />
                <br />
                <br />
                <div className={style.buttonContainer}>
            <button onClick={() => openTool('logscleaner')}>
                Open Tool
            </button>
            </div>
            </div>
            </>
    );
};

export default LogCleaner;