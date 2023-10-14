import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';
import { invoke } from "@tauri-apps/api";

const OpenSampleAcq = (): React.JSX.Element => {

    const {
        showLoading,
        openSampleAcq,
        closeLoadingOverlay
    } = useUtilityFunctions();

    const openFolder = async (path: String) => {
        closeLoadingOverlay();
        await invoke('open_folder', { path });
    };

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <div className={style.toolPage}>
                <h1>Open Sample Acquisition Advanced</h1>
                <br />
                <h2>
                    This tool open the <strong>Acquisition Sample Advanced</strong> program from <button className={style.linkToFolder} onClick={() => openFolder("C:\\Program Files\\Common Files\\Trophy\\Acquisition")}>"C:\\Program Files\\Common Files\\Trophy\\Acquisition\\AcquisitionSampleAdvanced"</button>.
                </h2>
                <br />
                    <p className={style.questionTitle}>What solves?</p>
                    <h2>
                    It will <strong>launch an acquisition</strong> without needing to use a CS Imaging software. By doing so, is it possible to check if the driver of the unit is working and to decide if you need to reinstall the Imaging Software or the driver itself.
                    </h2>
                <br />
                <br />
                <br />
                <br />
                <div className={style.buttonContainer}>
            <button onClick={() => openSampleAcq("C:\\Program Files\\Common Files\\Trophy\\Acquisition\\AcquisitionSampleAdvanced")}>
                Sample Acq
            </button>
            </div>
            </div>
        </>
    );
};

export default OpenSampleAcq;