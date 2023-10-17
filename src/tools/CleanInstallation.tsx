import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';
import { invoke } from "@tauri-apps/api";

const CleanInstallation = (): React.JSX.Element => {

    const {
        closeLoadingOverlay,
        showLoading,
        cleanInstallation
    } = useUtilityFunctions();

    const openFolder = async (path: String) => {
        closeLoadingOverlay();
        await invoke('open_folder', { path });
    };

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <div className={style.toolPage}>
                <h1>CSI8 Clean Installation</h1>
                <br />
                <h2>
                    This tool will delete the <strong>registry keys</strong> of CS Imaging 8 and will rename the folder <button className={style.linkToFolder} onClick={() => openFolder("C:\\Program Files (x86)\\Carestream")}>"C:\Program Files (x86)\Carestream"</button> into "C:\Program Files (x86)\Carestream_OLD"
                </h2>
                <br />
                    <p className={style.questionTitle}>What solves?</p>
                    <h2>
                    By deleting these keys and renaming the folder, you could solve issues with the loading of CS Imaging or errors such as <strong>CSI_-1</strong> and <strong>CSI_-2</strong>.
                    </h2>
                <br />
                <h3>
                    The uninstall of CSI8 will run automatically.
                </h3>
                <br />
                <br />
                <br />
                <div className={style.buttonContainer}>
                <button onClick={() => cleanInstallation()}>
                    Remove files
                </button>
                </div>
            </div>
        </>
    );
};

export default CleanInstallation;