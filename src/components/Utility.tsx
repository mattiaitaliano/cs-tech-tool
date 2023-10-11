import React from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { sendNotification } from '@tauri-apps/api/notification';

const Utility = (): React.JSX.Element => {

    const openTW = async (path: String) => {
        await invoke('open_folder', {path});

        sendNotification({
          title: 'Task Completed',
          body: 'TW folder opened successfully!'
        });
      };

      const openFirewall = async () => {
        await invoke('open_firewall');

        sendNotification({
          title: 'Task Completed',
          body: 'Firewall Ports opened successfully!'
        });
      };

    return (
        <>
            <button onClick={() => openTW("C:\\ProgramData\\TW")}>
                Open TW
            </button>
            <br />
            <br />
            <button onClick={() => openFirewall()}>
                Open Firewall
            </button>
        </>
    );
}

export default Utility;
