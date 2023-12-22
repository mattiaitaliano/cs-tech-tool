import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';

const CSDMLiteReset = (): React.JSX.Element => {

    const {
        showLoading,
        openTool,
        openTN
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <div className={style.toolPage}>
                <h1>CSDMLite Reset</h1>
                <br />
                <h2>
                    This tool will reset the <strong>CSDMLite Service</strong> of CS Imaging by removing cache on the local computer.
                    <br />
                    <br />
                    Find more information in the<button className={style.linkToFile} onClick={() => openTN('csdmlitereset')}>technews</button>.
                </h2>
                <br />
                    <p className={style.questionTitle}>What solves?</p>
                    <h2>
                    By resetting it, you will solve any issue regarding the <strong>stop of the service</strong> and the impossibility to open the CS Imaging product.
                    </h2>
                <br />
                <br />
                <br />
                <br />
                <div className={style.buttonContainer}>
            <button onClick={() => openTool('resetcsdmlite')}>
                Reset
            </button>
            </div>
            </div>
            </>
    );
};

export default CSDMLiteReset;