import React, { useState } from 'react';
import LoadingOverlay from '../utilities/LoadingOverlay';
import { sendNotification } from '@tauri-apps/api/notification';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import { invoke, dialog } from '@tauri-apps/api';

const Utility = (): React.JSX.Element => {

    const {
        showLoading,
        computerIP,
        openTW,
        openFirewall,
        showIP,
        resetActivation,
        nbusData,
        openSampleAcq,
        installCpp,
        disLicense,
        fullPermissionDb
    } = useUtilityFunctions();

    const [inputValue, setInputValue] = useState('');

    const addPermission = (dbPath: string) => {
        if (!inputValue.trim()) {
            sendNotification({
                title: "Attention!",
                body: "Please enter a valid value ad DB Path."
            });
            return;
        }

        fullPermissionDb(dbPath);
    };

    const selectFolder = async () => {
        const selected = await dialog.open({
            directory: true
        });
    
        if (selected) {
            if (Array.isArray(selected)) {
                setInputValue(selected[0]);
            } else {
                setInputValue(selected);
            }
        }
    };
    
    
    return (
        <>
            {showLoading && <LoadingOverlay />}
            <button onClick={() => openTW("C:\\ProgramData\\TW")}>
                Open TW
            </button>
            <br />
            <br />
            <button onClick={() => openFirewall()}>
                Open Firewall
            </button>
            <br />
            <br />
            <button onClick={() => showIP()}>
                Show IP
            </button>
            <span>{computerIP}</span>
            <br />
            <br />
            <button onClick={() => resetActivation()}>
                Reset Activation
            </button>
            <br />
            <br />
            <button onClick={() => nbusData()}>
                Cancel nbus.data
            </button>
            <br />
            <br />
            <button onClick={() => openSampleAcq("C:\\Program Files\\Common Files\\Trophy\\Acquisition\\AcquisitionSampleAdvanced")}>
                Sample Acq
            </button>
            <br />
            <br />
            <button onClick={() => installCpp()}>
                Install C++
            </button>
            <br />
            <br />
            <button onClick={() => disLicense()}>
                DIS License
            </button>
            <br />
            <br />
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <button onClick={selectFolder}>📂</button>
            <button onClick={() => addPermission(inputValue)}>
                Full Permission
            </button>
        </>
    );
}

export default Utility;

