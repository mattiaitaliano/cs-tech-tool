import { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { sendNotification } from '@tauri-apps/api/notification';

export const useUtilityFunctions = () => {
    const [showLoading, setShowLoading] = useState(false);
    const [computerIP, setComputerIP] = useState<string>('');

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

    const openFirewall = async () => {
        closeLoadingOverlay();
        let notification: Array<string> = await invoke('open_firewall');
        sendNotification({
            title: notification[0],
            body: notification[1]
        });
    };

    const showIP = async () => {
        closeLoadingOverlay();
        let thisIP: string = await invoke('get_ip');
        setComputerIP(thisIP);
    };

    const resetActivation = async () => {

        closeLoadingOverlay();
        let notification: Array<string> = await invoke('reset_activation_client');
        sendNotification({
            title: notification[0],
            body: notification[1]
        });
        
    };

    const nbusData = async () => {

        closeLoadingOverlay();
        let notification: Array<string> = await invoke('delete_nbus_data');
        sendNotification({
            title: notification[0],
            body: notification[1]
        });
        
    };

    const openSampleAcq = async (path: String) => {
        closeLoadingOverlay();
        await invoke('open_exe', { path });
    };

    const installCpp = async () => {
        closeLoadingOverlay();
        await invoke('install_cpp');
    };

    const disLicense = async () => {
        closeLoadingOverlay();
        await invoke('dis_license');
    };
    const fullPermissionDb = async (dbPath: string) => {
        closeLoadingOverlay();
        let notification: Array<string> = await invoke('full_permission_db', { dbPath });
        sendNotification({
            title: notification[0],
            body: notification[1]
        });
    };

    const disableStartup = async () => {
        closeLoadingOverlay();
        let notification: Array<string> =  await invoke('disable_startup');
        sendNotification({
            title: notification[0],
            body: notification[1]
        });
    };

    const openExceptions = async () => {
        closeLoadingOverlay();
        let path: string = "resources\\files\\exceptions_folder.pdf";
        await invoke("open_file", {path});
    };

    return {
        closeLoadingOverlay,
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
        fullPermissionDb,
        disableStartup,
        openExceptions
    };
}