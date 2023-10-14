import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';
import { invoke } from "@tauri-apps/api";

const ResetActivation = (): React.JSX.Element => {

    const {
        showLoading,
        openTW,
        resetActivation
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <div className={style.toolPage}>
                <h1>Reset Activation Client</h1>
                <br />
                <h2>
                    This tool will cancel the two <strong>activation's files</strong> in <button className={style.linkToFolder} onClick={() => openTW("C:\\ProgramData\\TW")}>"C:\Program Data\TW"</button>.
                </h2>
                <br />
                    <p className={style.questionTitle}>What solves?</p>
                    <h2>
                    It resolves the bug of Activation Client's <strong>loop loading</strong> that block you to open the application.
                    </h2>
                <br />
                <h3>
                    The files will be created again on next CS Activation Client start up.
                </h3>
                <br />
                <br />
                <br />
                <div className={style.buttonContainer}>
            <button onClick={() => resetActivation()}>
                Reset Activation
            </button>
            </div>
            </div>
        </>
    );
};

export default ResetActivation;