import { useState } from "react";
import style from "../static/utilities.module.scss";
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import LoadingOverlay from '../utilities/LoadingOverlay';


interface ConfirmationOverlayProps {
    action: string,
    csi: string,
    product: string,
    operation: string,
    onClose: () => void,
};


const ConfirmationOverlay: React.FC<ConfirmationOverlayProps> = ({action, csi, product, operation, onClose }) => {

    const [isDone, setIsDone] = useState(false);
    
    const {
        showLoading,
        CSSecurityTool,
    } = useUtilityFunctions();

    const handleContinueBtn = function () {
        CSSecurityTool(action.toLowerCase(), csi.toLowerCase(), product.toLowerCase(), operation.toLowerCase());
        setTimeout(() => setIsDone(true), 5000);
    }

    
    return (
        <>
            {showLoading && <LoadingOverlay />}
            { isDone ?
            (<>
            <div className={style.confirmationOverlay}></div>
            <div className={style.confirmationOverlayContainer}>
                <h2>Success!!</h2>
                <p>The selected operation has been correctly performed. 
                <br /><br />
                Now you can apply other rules or continue with your navigation.</p>
                <br />
                <div className={style.buttonsLayout}>
                    <button className={style.primaryButton} onClick={onClose}>Continue</button>
                </div>
                </div>
            </>
                )
                : (<>
            <div className={style.confirmationOverlay}></div>
            <div className={style.confirmationOverlayContainer}>
                <h2>ATTENTION!</h2>
                <p>Before to proceed, please check out the selection made:
                    <br/><br/>
                    <strong>CS Imaging</strong>: {csi.split("_").join(" ")}
                    <br/><br/>
                    <strong>Product</strong>: {product.split("_").join(" ")}
                    <br/><br/>
                    <strong>Operation</strong>: {`${action} ${operation} rules`}
                <br/><br/>
                </p>
                <div className={style.buttonsLayout}>
                    <button className={style.primaryButton} onClick={handleContinueBtn}>Continue</button>
                    <button className={style.primaryButton} onClick={onClose}>Cancel</button>
                </div>
            </div></>)}
        </>
    );
};

export default ConfirmationOverlay;