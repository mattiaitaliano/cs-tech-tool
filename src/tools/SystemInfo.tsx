import React, { useState, useEffect } from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';
import { CSDProducts, Drivers } from "../tool_functions/driverVersions";
import {formatSystemInfo, compareSpecifics} from '../tool_functions/systemComparison'

export type SystemInfo = {
    cpu: string,
    gpu: string,
    ram: string,
    hard_disk: string,
    cuda: string,
    os: string,
    core: number,
    threads: number,
    clock: number,
    gpu_ram: string
}
const SystemInfoComponent = (): React.JSX.Element => {   

    const [isLoading, setIsLoading] = useState(false);

    const {
        specificsChecking,
    } = useUtilityFunctions();  

    const [ systemInfo, setSystemInfo ] = useState<SystemInfo | null>(null);
    const [ isCPUPassed, setIsCPUPassed] = useState("");
    const [ isRAMPassed, setIsRAMPassed] = useState("");
    const [ isHDPassed, setIsHDPassed] = useState("");
    const [ isGPUPassed, setIsGPUPassed] = useState("");
    const [ isCUDAPassed, setIsCUDAPassed] = useState("");
    const [ isOSPassed, setIsOSPassed] = useState("");

    const handleChecking = async function() {
        setIsLoading(true);
        let values = await specificsChecking();
        values = formatSystemInfo(values)

        setSystemInfo(values);
        setIsLoading(false);
    }

    useEffect(() => {
        handleChecking();
      }, []);
    
    const [ product, setProduct ] = useState<string>("no_selection");
    const [ unit, setUnit] = useState<string>("no_selection");
    const [ driver, setDriver] = useState(Drivers["no_selection"]["base"]);

      useEffect(() => {
        if (systemInfo && driver !== Drivers["no_selection"]["base"]) {
            setIsCPUPassed(() => compareSpecifics("cpu", systemInfo, driver));
            setIsRAMPassed(() => compareSpecifics("ram", systemInfo, driver));
            setIsHDPassed(() => compareSpecifics("hd", systemInfo, driver));
            setIsGPUPassed(() => compareSpecifics("gpu", systemInfo, driver));
            setIsCUDAPassed(() => compareSpecifics("cuda", systemInfo, driver));
            setIsOSPassed(() => compareSpecifics("os", systemInfo, driver));
        } else {
            setIsCPUPassed("");
            setIsRAMPassed("");
            setIsHDPassed("");
            setIsGPUPassed("");
            setIsCUDAPassed("");
            setIsOSPassed("");
        }
      })

      const handleProduct = function(e: React.ChangeEvent<HTMLSelectElement>) {
        setProduct(e.target.value);
        if (product === "no_selection") {
            setDriver(Drivers["no_selection"]["base"]);
        }
        setUnit("no_selection");
        };

        const handleUnit = function(e: React.ChangeEvent<HTMLSelectElement>) {
            setUnit(e.target.value);
            setDriver(Drivers["no_selection"]["base"]);
                   
        };

        const handleDriver = function(e: React.ChangeEvent<HTMLSelectElement>) {
            setDriver(Drivers[unit][e.target.value]);
        };

        const handleCPUTitle = (): string => {
            const result = isCPUPassed === "⚠️" ? `The CPU's clock speed (${systemInfo?.clock} GHz) doesn't meet\nthe requirements (${driver.clock} GHz), please manually compare\nthe two CPUs online.` : "Not passed:\nupdate your CPU.";

            return result;
        }

        const handleRAMTitle = (): string => {
            const result = isRAMPassed === "⚠️" ? "Upgrade your RAM depending on\nthe features you need." : "Not passed:\nupgrade your RAM.";

            return result;
        }
        const handleOSTitle = (): string => {
            const result = isOSPassed === "⚠️" ? "Windows Home has not been tested with this product,\nupgrade to Professional if it's possible." : "Not passed:\nupgrade your Operating System.";

            return result;
        }

    return (
        <>
            {isLoading ? 
            <> 
            <div className={style.toolPage}>
                <h1>System Check</h1>
                <h2>
                    Compare the specifics of the <strong>current computer</strong> and the requirements of the selected <strong>driver</strong>.
                </h2>
            </div>
            <LoadingOverlay />
            </> 
            :
            <div className={style.toolPage}>
                <h1>System Check</h1>
                <h2>
                    Compare the specifics of the <strong>current computer</strong> and the requirements of the selected <strong>driver</strong>.
                </h2>
                <br/>
                <form className={style.twoColumnsForm}>
                    <div className={style.formColumn} >
                            <label>
                            <strong>Product</strong>:
                            </label>
                        <br/>
                            <br/>
                            <select name="products" id="products" onChange={handleProduct}> 
                            <option value="no_selection">---</option>
                                <option value="cs8x00">CS 8X00</option> 
                                <option value="cs9x00">CS 9X00</option>
                                <option value="RVG">RVG</option>
                                <option value="cs1x00">CS 1x00</option>
                                <option value="cs7x00">CS 7x00</option>
                                <option value="cs9600">CS 9600(proxy)</option>
                        </select>
                    </div>
                    
                    <div className={style.formColumn} >
                    { product === "no_selection" ? "" :
                    <>
                            <label>
                                <strong>Unit</strong>:
                            </label>
                        <br/>
                            <br/>
                            <select name="units" id="units" onChange={handleUnit}> 
                                {Object.entries(CSDProducts[product as keyof typeof CSDProducts]).map(([key, value]) => (
                                    <option key={key} value={key}>{value}</option>
                                ))}
                            </select>
                    </>
                    }
                    </div>
                    <div className={style.formColumn} >
                    { unit === "no_selection" ? "" :
                    <>
                            <label>
                                <strong>Driver</strong>:
                            </label>
                        <br/>
                            <br/>
                            <select name="drivers" id="drivers" onChange={handleDriver}> 
                                {Object.keys(Drivers[unit as keyof typeof Drivers]).map((key) => (
                                    <option key={key} value={key}>{key}</option>
                                ))}
                            </select>
                    </>
                    }
                    </div>
                </form>
                <br/>
                <hr />
                <br/>
                <span>{systemInfo === null ? "" : 
                <div className={style.systemInfoTable}>
                <div className={style.systemInfoRow}>
                  <div className={`${style.systemInfoCell} ${style.header}`}></div>
                  <div className={`${style.systemInfoCell} ${style.header}`}>System Specifics</div>
                  <div className={`${style.systemInfoCell} ${style.header}`}>Requirements</div>
                  <div className={`${style.systemInfoCell} ${style.header}`}>Test</div>
                </div>
                <div className={style.systemInfoRow}>
                  <div className={style.systemInfoCell}><strong>CPU</strong></div>
                  <div className={style.systemInfoCell}>{systemInfo.cpu}</div>
                  <div className={style.systemInfoCell}>{driver.cpu}</div>
                  <div className={`${style.systemInfoCell} ${style.checkBox}`} title={ isCPUPassed === "✅" ? "Passed" : handleCPUTitle()} >{isCPUPassed}</div>
                </div>
                <div className={style.systemInfoRow}>
                  <div className={style.systemInfoCell}><strong>RAM</strong></div>
                  <div className={style.systemInfoCell}>{systemInfo.ram}</div>
                  <div className={style.systemInfoCell}>{driver.ram}</div>
                  <div className={`${style.systemInfoCell} ${style.checkBox}`} title={ isRAMPassed === "✅" ? "Passed" : handleRAMTitle()}>{isRAMPassed}</div>
                </div>
                <div className={style.systemInfoRow}>
                  <div className={style.systemInfoCell}><strong>HD</strong></div>
                  <div className={style.systemInfoCell}>{systemInfo.hard_disk}</div>
                  <div className={style.systemInfoCell}>{driver.hard_disk}</div>
                  <div className={`${style.systemInfoCell} ${style.checkBox}`} title={ isHDPassed === "✅" ? "Passed" : "Not passed:\nincrease the Memory."}>{isHDPassed}</div>
                </div>
                <div className={style.systemInfoRow}>
                  <div className={style.systemInfoCell}><strong>GPU</strong>
                  </div>
                  <div className={style.systemInfoCell}>{systemInfo.gpu} {systemInfo.gpu_ram} GB</div>
                  <div className={style.systemInfoCell}>{driver.gpu}</div>
                  <div className={`${style.systemInfoCell} ${style.checkBox}`} title={ isGPUPassed === "✅" ? "Passed" : "Not passed:\nincrease the dedicated Memory."}>{isGPUPassed}</div>
                </div>
                <div className={style.systemInfoRow}>
                  <div className={style.systemInfoCell}><strong>CUDA</strong></div>
                  <div className={style.systemInfoCell}>{systemInfo.cuda}</div>
                  <div className={style.systemInfoCell}>{driver.cuda}</div>
                  <div className={`${style.systemInfoCell} ${style.checkBox}`} title={ isCUDAPassed === "✅" ? "Passed" : "Not passed:\nupdate the CUDA version."}>{isCUDAPassed}</div>
                </div>
                <div className={style.systemInfoRow}>
                  <div className={style.systemInfoCell}><strong>OS</strong></div>
                  <div className={style.systemInfoCell}>{systemInfo.os}</div>
                  <div className={style.systemInfoCell}>{driver.os}</div>
                  <div className={`${style.systemInfoCell} ${style.checkBox}`} title={ isOSPassed === "✅" ? "Passed" : handleOSTitle()}>{isOSPassed}</div>
                </div>
              </div>
                }</span>
                
                <br />
                <br />
            </div>
            }
            </>
    );
};

export default SystemInfoComponent;

