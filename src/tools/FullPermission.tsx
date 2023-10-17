import React, {useState} from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import { dialog } from '@tauri-apps/api';
import style from '../static/toolsLayout.module.scss';


const FullPermission = (): React.JSX.Element => {

    const {
        showLoading,
        fullPermissionDb
    } = useUtilityFunctions();

    const [inputValue, setInputValue] = useState('');

    const addPermission = async (dbPath: string) => {
        if (!inputValue.trim()) {
            let permissionGranted = await isPermissionGranted();
            if (!permissionGranted) {
            const permission = await requestPermission();
            permissionGranted = permission === 'granted';
            }
            if (permissionGranted) {
                sendNotification({
                title: "Attention!",
                body: "Please enter a valid value ad DB Path."
            });
            return;
        }
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
            <div className={style.toolPage}>
                <h1>Give Full Permission</h1>
                <br />
                <h2>
                    This tool will assign full permission to the <strong>Database folder</strong> selected to Everyone.
                </h2>
                <br />
                    <p className={style.questionTitle}>What solves?</p>
                    <h2>
                    Could fix possible issues in communication between <strong>Server</strong> and  <strong>Clients</strong>. Perform it on the Server side.
                    </h2>
                <br />
                <br />
                <br />
                <br />
                
                <div className={style.buttonContainer}>
                 <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <button onClick={selectFolder} className={style.noButton}>📂</button>
            <br />
            <br />
            <button onClick={() => addPermission(inputValue)}>
                Full Permission
            </button>
            </div>
            </div>
           
        </>
    );
};

export default FullPermission;