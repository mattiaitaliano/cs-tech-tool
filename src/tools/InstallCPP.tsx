import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';

const InstallCPP = (): React.JSX.Element => {

    const {
        showLoading,
        installCpp
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <button onClick={() => installCpp()}>
                Install C++
            </button>
        </>
    );
};

export default InstallCPP;