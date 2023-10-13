import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
const Base = (): React.JSX.Element => {

    const {
        showLoading,
        resetActivation
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <button onClick={() => resetActivation()}>
                Reset Activation
            </button>
        </>
    );
};

export default Base;