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
                <h1>Logs Cleaner</h1>
                <br />
                <h2>
                This tool deletes all Carestream <strong>logs</strong> on the local computer. This can be useful for reducing the tracefiles size or/and for reproducing an issue and analyzing only the logs for that issue.
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