import { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';
import { SystemInfo } from '../tools/SystemInfo';

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

    const openPDF = async (name: string) => {
        closeLoadingOverlay();
        let path: string = `.\\resources\\files\\${name}.pdf`;
        await invoke("open_file", {path});
    };

    const CSSecurityTool = async (action: string, product:string, operation:string) => {
        closeLoadingOverlay();
            
        let firewall: string;
        switch (product) {
            case "CSImaging7":
                firewall = "CSI";
                break;
            case "CSImaging8_v2":
                firewall = "CSI";
                break;
            case "CSImaging8_v3":
                firewall = "CSI";
                break;
            case "CS8100":
                firewall = "CS8100";
                break;
            case "CS8100SC":
                firewall = "CS8100";
                break;
            case "CS81003D":
                firewall = "CS8100";
                break;
            case "CS8100SC3D":
                firewall = "CS8100";
                break;
            case "CS8200v1":
                firewall = "CS8200";
                break;
            case "CS8200v2":
                firewall = "CS8200";
                break;
            case "CS9600":
                firewall = "CS9600";
                break;
            default:
                firewall = "CSI"
        }
        
        switch (operation) {
            case "Defender":
                await invoke("cssecurity_defender_rules", {product, action});
                break;
            case "Firewall":
                await invoke("cssecurity_firewall_rules", {firewall, action});
                break;
            case "Security":
                await invoke("cssecurity_security_rules", {});
                break;
            case "All":
                await invoke("cssecurity_defender_rules", {product, action});
                await invoke("cssecurity_firewall_rules", {firewall, action});
                await invoke("cssecurity_security_rules");
        }

    }


    const specificsChecking = async function () {
        const values: SystemInfo = await invoke("specifics_checking");
        return values;
    }

    return {
        closeLoadingOverlay,
        openTW,
        resetActivation,
        nbusData,
        openTool,
        openBoardsave,
        openTN,
        openPDF,
        resetCSDMLite,
        showLoading,
        CSSecurityTool,
        specificsChecking
    };
}


//////////////////////////////////////


