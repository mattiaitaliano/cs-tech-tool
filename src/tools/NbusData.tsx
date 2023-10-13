import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';

const NbusData = (): React.JSX.Element => {

    const {
        showLoading,
        nbusData
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <button onClick={() => nbusData()}>
                Cancel nbus.data
            </button>
        </>
    );
};

export default NbusData;