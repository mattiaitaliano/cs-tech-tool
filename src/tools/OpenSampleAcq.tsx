import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';

const OpenSampleAcq = (): React.JSX.Element => {

    const {
        showLoading,
        openSampleAcq
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <button onClick={() => openSampleAcq("C:\\Program Files\\Common Files\\Trophy\\Acquisition\\AcquisitionSampleAdvanced")}>
                Sample Acq
            </button>
        </>
    );
};

export default OpenSampleAcq;