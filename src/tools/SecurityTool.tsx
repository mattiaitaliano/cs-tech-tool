import React, { useState } from "react";
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';
import ConfirmationOverlay from "../utilities/ConfirmationOverlay";

const SecurityTool = (): React.JSX.Element => {

    const [showConfirmationMessage, setShowConfirmationMessage] = useState<boolean>(false);
    const [action, setAction] = useState("null");

    const [ csi, setCsi ] = useState<string>("no_selection");
    const [ product, setProduct ] = useState<string>("no_selection");
    const [ operation, setOperation] = useState<string>("no_selection");

    const [showButtons, setShowButtons] = useState(false);
    const [isSomethingSelected, setIsSomethingSelected] = useState(false);

    const handleCSIChange = function(e: React.ChangeEvent<HTMLSelectElement>) {
        setCsi(e.target.value);
        if (e.target.value !== "no_selection" && product !== "no_selection" && operation !== "no_selection") {setShowButtons(true);} else {setShowButtons(false)}
        if (e.target.value !== "No_Imaging" || product !== "No_Unit") { setIsSomethingSelected(true)} else {setIsSomethingSelected(false)}
    };

    const handleProductChange = function(e: React.ChangeEvent<HTMLSelectElement>) {
        setProduct(e.target.value);
        if (e.target.value !== "no_selection" && csi !== "no_selection" && operation !== "no_selection") {setShowButtons(true);} else {setShowButtons(false)}
        if (csi !== "No_Imaging" || e.target.value !== "No_Unit") { setIsSomethingSelected(true)} else {setIsSomethingSelected(false)}
    };

    const handleOperationChange = function(e: React.ChangeEvent<HTMLSelectElement>) {
        setOperation(e.target.value);
        if (e.target.value !== "no_selection" && csi !== "no_selection" && product !== "no_selection") {setShowButtons(true);} else {setShowButtons(false)}
        
    };

    const {
        openPDF
    } = useUtilityFunctions();

    return (
        <>
            {showConfirmationMessage && <ConfirmationOverlay action={action} csi={csi} product={product} operation={operation} onClose={() => setShowConfirmationMessage(false)} /> }
            <div className={style.toolPage}>
                <h1>CS Security Tool</h1>
                <h2>
                This tool <em>applies</em> or <em>remove</em> the necessary Carestream <strong>security policies</strong> per product to the local workstation.
                Find more information in the<button className={style.linkToFile} onClick={() => openPDF('cssecuritytool_readme')}>README file</button>.
                </h2>
                    <p className={style.questionTitle}>Select the product and operation.</p>
                    <h2>Before to execute the tool, select the CSD product you are interested in and the relative operation to perform. Pick a value from the dropdown list.</h2>
                    <br/>
                    <br/>
                    <br/>
                    <form className={style.twoColumnsForm}>
                        <div className={style.formColumn} >
                        <label>
                            CS Imaging:
                        </label>
                    <br/>
                        <br/>
                        <select name="csi" id="csi" onChange={handleCSIChange}> 
                        <option value="no_selection">---</option>
                        <option value="No_Imaging">N/A</option> 
                        <option value="CSI7">CS Imaging 7</option> 
                        <option value="CSI8_V2">CS Imaging 8 V2</option> 
                        <option value="CSI8_V3">CS Imaging 8 V3</option> 
                    </select>
                        </div>

                        <div className={style.formColumn} >
                        <label>
                            Product:
                        </label>
                    <br/>
                        <br/>
                        <select name="products" id="products" onChange={handleProductChange}> 
                        <option value="no_selection">---</option>
                        <option value="No_Unit">N/A</option> 
                        <option value="CS8100">CS8100</option> 
                        <option value="CS8100_SC">CS8100 SC</option>
                        <option value="CS8100_3D">CS8100 3D</option>
                        <option value="CS8100_SC_3D">CS8100 3D SC</option>
                        <option value="CS8200">CS8200</option>
                        <option value="CS8200_NEO">CS8200 NEO</option>
                        <option value="CS9600_PROXY">CS9600 (proxy)</option>
                    </select>
                        </div>

                        <div className={style.formColumn} >
                        <label>
                            Operation:
                        </label>
                    <br/>
                        <br/>
                        <select name="operations" id="operations" onChange={handleOperationChange}>
                        <option value="no_selection">---</option>
                            <option value="defender">Windows Defender</option> 
                            <option value="firewall">Windows Firewall</option> 
                            <option value="security">Windows Security</option> 
                            <option value="all">Apply all</option> 
                        </select>
                        </div>

                    </form>
                    
                    <br/>
                    <br/><br/>
                    <br/>
                    
            
                {showButtons && isSomethingSelected && <div className={style.buttonContainer}>
            <button onClick={() => {
                setAction("Add");
                setShowConfirmationMessage(true);
            }
            }
            >
                Add Rules
            </button>
            { operation !== "security" && operation !== "all" &&
            <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => {
                setAction("Remove");
                setShowConfirmationMessage(true);
            }
            }
            >
                Remove Rules
            </button>
            </>
}
            </div>}
            </div>
            </>
    );
};

export default SecurityTool;