import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';

const DisLicense = (): React.JSX.Element => {

    const {
        showLoading,
        disLicense
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <div className={style.toolPage}>
                <h1>Generate DIS License</h1>
                <br />
                <h2>
                    This tool will help you with <strong>DIS LICENSING</strong> of our <u>old Imaging Softwares</u>.
                </h2>
                <br />
                    <p className={style.questionTitle}>What solves?</p>
                    <h2>
                    By providing the first half of the license code shown in <strong>DIS</strong> or <strong>CS Imaging 7</strong>, the tool will generate the remaining code to activate the product.
                    </h2>
                <br />
                <br />
                <br />
                <br />
                <div className={style.buttonContainer}>
            <button onClick={() => disLicense()}>
                Generate Code
            </button>
            </div>
            </div>
            </>
    );
};

export default DisLicense;