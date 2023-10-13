import React, {useState} from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';


const Base = (): React.JSX.Element => {

    const {
        showLoading,
        openTW
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
                <button onClick={() => openTW("C:\\ProgramData\\TW")}>
                    Open TW
                </button>
        </>
    );
};

export default Base;