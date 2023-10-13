import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
const StartUp = (): React.JSX.Element => {

    const {
        showLoading,
        disableStartup
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <button onClick={() => disableStartup()}>
                Disable Startup
            </button>
        </>
    );
};

export default StartUp;

