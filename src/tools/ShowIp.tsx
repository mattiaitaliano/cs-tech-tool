import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
const ShowIp = (): React.JSX.Element => {

    const {
        showLoading,
        computerIP,
        showIP
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <button onClick={() => showIP()}>
                Show IP
            </button>
            <span>{computerIP}</span>
        </>
    );
};

export default ShowIp;