import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';
import { invoke } from "@tauri-apps/api";

const NbusData = (): React.JSX.Element => {

    const {
        closeLoadingOverlay,
        showLoading,
        nbusData
    } = useUtilityFunctions();

    const openFolder = async (path: String) => {
        closeLoadingOverlay(2000);
        await invoke('open_folder', { path });
    };

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <div className={style.toolPage}>
                <h1>Delete nbus.data</h1>
                <br />
                <h2>
                    This tool will delete the <strong>nbus.data</strong> file located in <button className={style.linkToFolder} onClick={() => openFolder("C:\\ProgramData\\TW\\CSDMLite")}>"C:\Program Data\TW\CSDMLite\nbus.data"</button>.
                </h2>
                <br />
                    <p className={style.questionTitle}>What solves?</p>
                    <h2>
                    By deleting this file you could solve issue in loading CS Imaging such as <strong>CSI_-1</strong> and <strong>CSI_-2</strong>.
                    </h2>
                <br />
                <h3>
                    The file will be created again on next CS Imaging start up.
                </h3>
                <br />
                <br />
                <br />
                <div className={style.buttonContainer}>
                <button onClick={() => nbusData()}>
                    Cancel nbus.data
                </button>
                </div>
            </div>
        </>
    );
};

export default NbusData;