import React, { useState, useEffect } from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';
import { CSDProducts, Drivers } from "../tool_functions/driverVersions";

export type SystemInfo = {
    cpu: string,
    gpu: string,
    ram: string,
    hard_disk: string,
    cuda: string,
    os: string
}

export type SystemComparison = {
    cpu: boolean,
    gpu: boolean,
    ram: boolean,
    hard_disk: boolean,
    cuda: boolean,
    os: boolean
}

const COMPARISONOBJ: SystemComparison = {
    cpu: false,
    gpu: false,
    ram: false,
    hard_disk: false,
    cuda: false,
    os: false
}

const SystemInfoComponent = (): React.JSX.Element => {   

    const [isLoading, setIsLoading] = useState(false);

    const {
        specificsChecking,
    } = useUtilityFunctions();  

    const [ systemInfo, setSystemInfo ] = useState<SystemInfo | null>(null);
    const [ systemComparison, setSystemComparison ] = useState<SystemComparison>(COMPARISONOBJ);


    const compareSpecifics = function () {
        const middleObj = COMPARISONOBJ;
        middleObj.cpu = true;
        setSystemComparison(middleObj);
    }


    const handleChecking = async function() {
        setIsLoading(true);
        let values = await specificsChecking();
        values = await formatSystemInfo(values)

        setSystemInfo(values);
        setIsLoading(false);
    }

    useEffect(() => {
        handleChecking();
      }, []);
    
    const [ product, setProduct ] = useState<string>("no_selection");
    const [ unit, setUnit] = useState<string>("no_selection");
    const [ driver, setDriver] = useState(Drivers["no_selection"]["base"]);

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

    return (
        <>
            {isLoading ? 
            <> 
            <div className={style.toolPage}>
                <h1>System Compatibility</h1>
                <h2>
                    Compare the specifics of the <strong>current computer</strong> and the requirements of the selected <strong>driver</strong>.
                </h2>
            </div>
            <LoadingOverlay />
            </> 
            :
            <div className={style.toolPage}>
                <h1>System Compatibility</h1>
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
                                <option value="cs2x00">CS 2x00</option>
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
                </div>
                <div className={style.systemInfoRow}>
                  <div className={`${style.systemInfoCell} ${systemComparison ? style.meetRequirement : style.noMeetRequirement}`}><strong>CPU</strong></div>
                  <div className={style.systemInfoCell}>{systemInfo.cpu}</div>
                  <div className={style.systemInfoCell}>{driver.cpu}</div>
                </div>
                <div className={style.systemInfoRow}>
                  <div className={style.systemInfoCell}><strong>RAM</strong></div>
                  <div className={style.systemInfoCell}>{systemInfo.ram}</div>
                  <div className={style.systemInfoCell}>{driver.ram}</div>
                </div>
                <div className={style.systemInfoRow}>
                  <div className={style.systemInfoCell}><strong>HD</strong></div>
                  <div className={style.systemInfoCell}>{systemInfo.hard_disk}</div>
                  <div className={style.systemInfoCell}>{driver.hard_disk}</div>
                </div>
                <div className={style.systemInfoRow}>
                  <div className={style.systemInfoCell}><strong>GPU</strong></div>
                  <div className={style.systemInfoCell}>{systemInfo.gpu}</div>
                  <div className={style.systemInfoCell}>{driver.gpu}</div>
                </div>
                <div className={style.systemInfoRow}>
                  <div className={style.systemInfoCell}><strong>CUDA</strong></div>
                  <div className={style.systemInfoCell}>{systemInfo.cuda}</div>
                  <div className={style.systemInfoCell}>{driver.cuda}</div>
                </div>
                <div className={style.systemInfoRow}>
                  <div className={style.systemInfoCell}><strong>OS</strong></div>
                  <div className={style.systemInfoCell}>{systemInfo.os}</div>
                  <div className={style.systemInfoCell}>{driver.os}</div>
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

function formatSystemInfo(systemInfo: SystemInfo): SystemInfo {
    const ramMatch = systemInfo.ram.match(/(\d+)/);
    const ramGB = ramMatch ? `${(parseInt(ramMatch[1]) / (1024 ** 3)).toFixed(2)} GB` : 'N/A';

    const hdMatch = systemInfo.hard_disk.match(/(\d+)/);
    const hdGB = hdMatch ? `${(parseInt(hdMatch[1]) / (1024 ** 3)).toFixed(2)} GB` : 'N/A';

    const regex = /CUDA Version: (\d+\.\d+)/;
    const cudaMatch = systemInfo.cuda.match(regex);
    let cudaVersion = '';

    if (cudaMatch && cudaMatch.length > 1) {
    cudaVersion = cudaMatch[1];
    } else {
        cudaVersion = "N/A"
    }

    return {
        cpu: systemInfo.cpu.substring(5) || 'N/A',
        gpu: systemInfo.gpu.substring(5) || 'N/A',
        ram: ramGB,
        hard_disk: hdGB,
        cuda: cudaVersion,
        os: systemInfo.os.substring(8) || 'N/A'
    };
}