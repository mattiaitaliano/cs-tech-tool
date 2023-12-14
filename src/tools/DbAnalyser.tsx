import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';

const DbAnalyser = (): React.JSX.Element => {

    const {
        showLoading,
        openTool,
        openTN
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <div className={style.toolPage}>
                <h1>DB Analyser</h1>
                <br />
                <h2>
                This tool allows you to check if your database <strong>can be updated</strong> to the latest version of CS Imaging. If a problem is detected, it collects logs and information about the database. It integrates two tools: Sanity Check, Report Tool.
                    <br />
                    <br />
                    Find more information in the<button className={style.linkToFile} onClick={() => openTN('dbanalyser')}>technews</button>.
                </h2>
                <br />
                    <p className={style.questionTitle}>What solves?</p>
                    <h2>
                    After performing the check of the database, it will allow you to understand if the current DB could be upgraded to latest version of CS Imaging.
                    </h2>
                <br />
                <br />
                <br />
                <br />
                <div className={style.buttonContainer}>
            <button onClick={() => openTool('dbanalyser')}>
                Open the Tool
            </button>
            </div>
            </div>
            </>
    );
};

export default DbAnalyser;