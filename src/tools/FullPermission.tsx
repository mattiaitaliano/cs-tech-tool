import React, {useState} from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { sendNotification } from '@tauri-apps/api/notification';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import { invoke, dialog } from '@tauri-apps/api';
const Base = (): React.JSX.Element => {

    const {
        showLoading,
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
};

export default Base;