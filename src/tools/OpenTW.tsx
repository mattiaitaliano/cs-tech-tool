import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';


const OpenTW = (): React.JSX.Element => {

    const {
        showLoading,
        openTW
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <div className={style.toolPage}>
                <h1>Open TW folder</h1>
                <br />
                <h2>
                    This tool will open the <strong>TW Folder</strong> which contains a lot of important documents and file for Carestream Dental product..
                </h2>
                <br />
                    <p className={style.questionTitle}>What solves?</p>
                    <h2>
                        It is an handy and fast link to the folder's path, just in case you need it.
                    </h2>
                <br />
                <br />
                <br />
                <br />
                <div className={style.buttonContainer}>
                <button onClick={() => openTW("C:\\ProgramData\\TW")}>
                    Open TW
                </button>
                </div>
                </div>
        </>
    );
};

export default OpenTW;