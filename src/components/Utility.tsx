import React, { useState } from 'react';
import LoadingOverlay from '../utilities/LoadingOverlay';

import { useUtilityFunctions } from '../tool_functions/utilityFunctions';

const Utility = (): React.JSX.Element => {

    const {
        showLoading,
        computerIP,
        openTW,
        openFirewall,
        showIP,
        resetActivation,
        nbusData
    } = useUtilityFunctions();

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
        </>
    );
}

export default Utility;

