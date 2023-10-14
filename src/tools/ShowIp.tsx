import React from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';

const ShowIp = (): React.JSX.Element => {

    const {
        showLoading,
        computerIP,
        showIP
    } = useUtilityFunctions();

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <div className={style.toolPage}>
                <h1>Show IP Address</h1>
                <br />
                <h2>
                    This tool will shows you the <strong>IP Address</strong> of the current pc.
                </h2>
                <br />
                    <p className={style.questionTitle}>What solves?</p>
                    <h2>
                    It helps to get rapidely the <strong>IP address</strong> in order to resolve communication issues between server and clients, find the path to download the CS Imaging Client or set a different path for the database.
                    </h2>
                <br />
                <br />
                <br />
                <div className={style.buttonContainer}>
            <button onClick={() => showIP()}>
                Show IP
            </button>
            <br />
            <br />
            <br />
            <span>{computerIP}</span>
            </div>
            </div>
        </>
    );
};

export default ShowIp;