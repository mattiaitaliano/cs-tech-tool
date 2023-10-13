import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
const Firewall = (): React.JSX.Element => {

    const {
        showLoading,
        openFirewall
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <button onClick={() => openFirewall()}>
                Open Firewall
            </button>
        </>
    );
};

export default Firewall;

