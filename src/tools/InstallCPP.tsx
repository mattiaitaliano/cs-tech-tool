import React, {useState} from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { sendNotification } from '@tauri-apps/api/notification';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import { invoke, dialog } from '@tauri-apps/api';
const Base = (): React.JSX.Element => {

    const {
        showLoading,
        installCpp
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <button onClick={() => installCpp()}>
                Install C++
            </button>
        </>
    );
};

export default Base;