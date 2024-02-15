import React, { useState } from "react";
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';
import ConfirmationOverlay from "../utilities/ConfirmationOverlay";

const SecurityTool = (): React.JSX.Element => {

    const [showConfirmationMessage, setShowConfirmationMessage] = useState<boolean>(false);
    const [action, setAction] = useState("null");

    const [ product, setProduct ] = useState<string>("no_selection");
    const [ operation, setOperation] = useState<string>("no_selection");

    const [showButtons, setShowButtons] = useState(false);

    const handleProductChange = function(e: React.ChangeEvent<HTMLSelectElement>) {
        setProduct(e.target.value);
        if (e.target.value !== "no_selection" && operation !== "no_selection") {setShowButtons(true);} else {setShowButtons(false)}
    };

    const handleOperationChange = function(e: React.ChangeEvent<HTMLSelectElement>) {
        setOperation(e.target.value);
        if (e.target.value !== "no_selection" && product !== "no_selection") {setShowButtons(true);} else {setShowButtons(false)}
        
    };

    const {
        openPDF
    } = useUtilityFunctions();

    return (
        <>
            {showConfirmationMessage && <ConfirmationOverlay action={action} product={product} operation={operation} onClose={() => setShowConfirmationMessage(false)} /> }
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
                            Product:
                        </label>
                    <br/>
                        <br/>
                        <select name="products" id="products" onChange={handleProductChange}> 
                        <option value="no_selection">---</option>
        <option value="CSImaging7">CSImaging 7</option> 
        <option value="CSImaging8_v2">CSImaging 8 v2</option> 
        <option value="CSImaging8_v3">CSImaging 8 v3</option> 
        <option value="CS8100">CS8100</option> 
        <option value="CS8100SC">CS8100 SC</option>
        <option value="CS81003D">CS8100 3D</option>
        <option value="CS8100SC3D">CS8100 3D SC</option>
        <option value="CS8200v1">CS8200</option>
        <option value="CS8200v2">CS8200 NEO</option>
        <option value="CS9600">CS9600 (proxy)</option>
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
        <option value="Defender">Windows Defender</option> 
        <option value="Firewall">Windows Firewall</option> 
        <option value="Security">Windows Security</option> 
        <option value="All">Apply all</option> 
    </select>
                        </div>

                    </form>
                    
                    <br/>
                    <br/><br/>
                    <br/>
                    
                {showButtons && <div className={style.buttonContainer}>
            <button onClick={() => {
                setAction("Add");
                setShowConfirmationMessage(true);
            }
            }>
                Add Rules
            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => {
                setAction("Remove");
                setShowConfirmationMessage(true);
            }
            }>
                Remove Rules
            </button>
            </div>}
            </div>
            </>
    );
};

export default SecurityTool;