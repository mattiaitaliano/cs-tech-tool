import { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';
import { SystemInfo } from '../tools/SystemInfo';

export const useUtilityFunctions = () => {
    const [showLoading, setShowLoading] = useState(false);

    const closeLoadingOverlay = (timer: number) => {
        setShowLoading(true);
        setTimeout(() => {
            setShowLoading(false);
        }, timer);
    }

    const openTW = async (path: String) => {
        closeLoadingOverlay(2000);
        await invoke('open_folder', { path });
    };


    const resetActivation = async () => {

        closeLoadingOverlay(2000);
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

        closeLoadingOverlay(2000);
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
        
        closeLoadingOverlay(2000);
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
        closeLoadingOverlay(2000);
        await invoke('open_tool', { path });
    };

    const openBoardsave = async () => {
        closeLoadingOverlay(2000);
        await invoke('open_boardsave');
    };

    const openTN = async (name: string) => {
        closeLoadingOverlay(2000);
        let path: string = `.\\resources\\technews\\${name}.pdf`;
        await invoke("open_file", {path});
    };

    const openPDF = async (name: string) => {
        closeLoadingOverlay(2000);
        let path: string = `.\\resources\\files\\${name}.pdf`;
        await invoke("open_file", {path});
    };

    const CSSecurityTool = async (action: string, csi: string, product:string, operation:string) => {
        closeLoadingOverlay(7000);

        if (operation === "defender") csSecurityDefender(csi, product, action)

        if (operation === "firewall") csSecurityFirewall(csi, product, action)

        if (operation === "security") csSecurityFolder()

        if (operation === "all") {
            csSecurityDefender(csi, product, "add")
            csSecurityFirewall(csi, product, "add");
            csSecurityFolder();
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

async function csSecurityDefender(csi: string, product: string, action: string) {
    await invoke("cssecurity_defender_rules", {csi, product, action});
}

async function csSecurityFirewall (csi: string, product: string, action: string) {
    if (product !== "no_unit") {
        switch (product) {
            case "cs8200":
                await invoke("cssecurity_firewall_rules", {csi, product: "cs8200", action});
                break;
            case "cs8200_neo":
                await invoke("cssecurity_firewall_rules", {csi, product: "cs8200", action});
                break;
            case "cs9600_proxy":
                await invoke("cssecurity_firewall_rules", {csi, product: "cs9600", action});
                break;
            default:
                await invoke("cssecurity_firewall_rules", {csi, product: "cs8100", action});
                break;
        }       
    } else {
        await invoke("cssecurity_firewall_rules", {csi, product, action});
    }
}

async function csSecurityFolder() {
    await invoke("cssecurity_security_rules");
}