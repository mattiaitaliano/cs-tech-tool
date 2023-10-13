import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';

const DisLicense = (): React.JSX.Element => {

    const {
        showLoading,
        disLicense
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <button onClick={() => disLicense()}>
                DIS License
            </button>
        </>
    );
};

export default DisLicense;