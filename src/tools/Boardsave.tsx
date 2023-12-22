import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';

const Boardsave = (): React.JSX.Element => {

    const {
        showLoading,
        openTool,
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <div className={style.toolPage}>
                <h1>Boardsave Finder</h1>
                <br />
                <h2>
                    This tool will help you to find <strong>Boardsave</strong> files of a specific unit.
                </h2>
                <br />
                    <p className={style.questionTitle}>What solves?</p>
                    <h2>
                    After finding the right unit's boardsave, it will help you in reset factory parameters and perform calibration after some sever issue that could block the device.
                    </h2>
                <br />
                <br />
                <br />
                <br />
                <div className={style.buttonContainer}>
            <button onClick={() => openTool('boardsavefinder')}>
                Open Tool
            </button>
            </div>
            </div>
            </>
    );
};

export default Boardsave;