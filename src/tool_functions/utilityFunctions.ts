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
        await invoke('open_firewall');
        sendNotification({
            title: 'Task Completed',
            body: 'Firewall Ports opened successfully!'
        });
    };

    const showIP = async () => {
        closeLoadingOverlay();
        let thisIP: string = await invoke('get_ip');
        setComputerIP(thisIP);
    };

    const resetActivation = async () => {

        closeLoadingOverlay();
        await invoke('reset_activation_client');
        sendNotification({
            title: 'Task Completed',
            body: 'CS Activation has been reset successfully!'
        });
        
    };

    const nbusData = async () => {

        closeLoadingOverlay();
        await invoke('delete_nbus_data');
        sendNotification({
            title: 'Task Completed',
            body: 'nbus.data has been deleted successfully!'
        });
        
    };

    return {
        showLoading,
        computerIP,
        openTW,
        openFirewall,
        showIP,
        resetActivation,
        nbusData
    };
}
