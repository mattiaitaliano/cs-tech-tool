import { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';

export const useUtilityFunctions = () => {
    const [showLoading, setShowLoading] = useState(false);

    const closeLoadingOverlay = () => {
        setShowLoading(true);
        setTimeout(() => {
            setShowLoading(false);
        }, 2000);
    }

    const openTW = async (path: String) => {
        closeLoadingOverlay();
        await invoke('open_folder', { path });
    };


    const resetActivation = async () => {

        closeLoadingOverlay();
        let notification: Array<string> = await invoke('reset_activation_client');
        let permissionGranted = await isPermissionGranted();
        if (!permissionGranted) {
        const permission = await requestPermission();
        permissionGranted = permission === 'granted';
        }
        if (permissionGranted) {sendNotification({
                    title: notification[0],
                    body: notification[1]
                });
            }
        
    };

    const nbusData = async () => {

        closeLoadingOverlay();
        let notification: Array<string> = await invoke('delete_nbus_data');
        let permissionGranted = await isPermissionGranted();
        if (!permissionGranted) {
        const permission = await requestPermission();
        permissionGranted = permission === 'granted';
        }
        if (permissionGranted) {sendNotification({
                    title: notification[0],
                    body: notification[1]
                });
    }
        
    };

    const resetCSDMLite = async () => {
        
        closeLoadingOverlay();
        let notification: Array<string> = await invoke('reset_csdmlite');
        let permissionGranted = await isPermissionGranted();
        if (!permissionGranted) {
        const permission = await requestPermission();
        permissionGranted = permission === 'granted';
        }
        if (permissionGranted) {sendNotification({
                    title: notification[0],
                    body: notification[1]
                });
    }
        
    };


    const openTool = async (path: string) => {
        closeLoadingOverlay();
        await invoke('open_tool', { path });
    };

    const openBoardsave = async () => {
        closeLoadingOverlay();
        await invoke('open_boardsave');
    };

    const openTN = async (name: string) => {
        closeLoadingOverlay();
        let path: string = `.\\resources\\technews\\${name}.pdf`;
        await invoke("open_file", {path});
    };

    return {
        closeLoadingOverlay,
        openTW,
        resetActivation,
        nbusData,
        openTool,
        openBoardsave,
        openTN,
        resetCSDMLite,
        showLoading
    };
}