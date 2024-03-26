import React, { useEffect, useRef, useState } from "react";
import LoadingOverlay from '../utilities/LoadingOverlay';
import { useUtilityFunctions } from '../tool_functions/utilityFunctions';
import style from '../static/toolsLayout.module.scss';
import Papa from 'papaparse';
import BarChart from "../utilities/logs-visualization/BarChart";

interface LogData {
    date: string;
    unixDate: number;
    errorCode: string;
  }

  interface ErrorCount {
    errorCode: string;
    count: number;
}

const LogSummary = () => {

    ///////////////////////////////////////////////////////////////////
    ////////////////////////// VARIABLES //////////////////////////////
    ///////////////////////////////////////////////////////////////////

    /////////////////////////// SET INTERFACE ////////////////////////


    const [ fileName, setFileName ] = useState<string>("");
    const [isFileTaken, setIsFileTaken ] = useState<boolean>(false);

    ////////////////////////// HOOK OVERLAY //////////////////////////////

    const {
        showLoading,
    } = useUtilityFunctions();

    ///////////////////////// DATA FROM LOGS //////////////////////////
    const [ logData, setLogData ] = useState<LogData[]>([]);
    const [ errorCounts, setErrorCounts ] = useState<ErrorCount[]>([]);

    ////////////////// SELECTIONS FOR GRAPH //////////////////

    const [ selectedGraph, setSelectedGraph ] =useState("graph");
    const [ selectedError, setSelectedError ] =useState("error");

    ////////////////////////// RANGE INPUT //////////////////////////////
    
    const [ minRange, setMinRange ] = useState<number | null>(null);
    const [ maxRange, setMaxRange ] = useState<number | null>(null);
    const [lowerVal, setLowerVal] = useState(0);
    const [upperVal, setUpperVal] = useState(100);

    
  

  const handleUpperInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUpperVal = parseInt(e.target.value);
    setUpperVal(newUpperVal);

    if (newUpperVal < lowerVal + 4) {
      setLowerVal(newUpperVal - 4);
    }
  };

  const handleLowerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLowerVal = parseInt(e.target.value);
    setLowerVal(newLowerVal);

    if (newLowerVal > upperVal - 4) {
      setUpperVal(newLowerVal + 4);
    }
  };

    useEffect(() => {
        if (upperVal < lowerVal + 4) {
        setLowerVal(upperVal - 4);
        }

        if (lowerVal > upperVal - 4) {
        setUpperVal(lowerVal + 4);
        }
    }, [lowerVal, upperVal]);

    useEffect(() => {
    if (minRange !== null && maxRange !== null) {
        setLowerVal(minRange);
        setUpperVal(maxRange);
    }
    }, [minRange, maxRange]);

    useEffect(() => {
        const filteredErrorCount = reduceData(logData)
        setErrorCounts(filteredErrorCount);
    }, [logData]);

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        const file = e.target.files[0];
            
        if (e.target.files.length > 0 && file.name.startsWith("EventLog")) {

            setFileName(file.name);
            setIsFileTaken(true);

            Papa.parse(file, {
                header: false,
                skipEmptyLines: true,
                complete: (result) => {
                    const data = result.data as string[][];
                    let transformedData: LogData[] = data.map((row) => {
                        const [dateString, , , , , , errorCode] = row;
                        const date = new Date(dateString);
                        const unixDate = date.getTime() / 1000;
                        const match = errorCode.match(/(Err_S_[\w]+)/);
                        const formattedErrorCode = match ? match[1] : "Unknown Error";
                        return { date: dateString, unixDate, errorCode: formattedErrorCode };
                    }).filter(({ errorCode }) => errorCode.includes("Err_S"));
            
                    setLogData(transformedData);
            
                    if (transformedData.length > 0) {
                        setMinRange(transformedData[0].unixDate);
                        setMaxRange(transformedData[transformedData.length - 1].unixDate);
                    }
                }
            });
            
            
            
        } else {
            setFileName("Select a EventLog.csv file");
            setIsFileTaken(false);
        }
    }

    return (
        <>
            {showLoading && <LoadingOverlay />}
            <div className={`${style.toolPage} ${style.containerLogSummary}`}>
                {/* ============= TITLE =============*/}

                <div className={style.gridTitle}>
                    <h1>Log Summary</h1>
                </div>
                {/* ============= INPUT BTN =============*/}

                <div className={style.gridInputBtn}>
                    <div className={style.subtitle}>
                        <h2>Choose an EventLog file and select the filters needed.</h2></div>
                    <div className={style.selectionBtn}>
                        <input 
                            type="file"
                            name="file"
                            id="fileInput"
                            accept=".csv"
                            onChange={handleFile}
                            style={{ display: 'none' }}
                        />
                        <br/>
                        <label 
                            htmlFor="fileInput"
                            className={style.primaryBtn}
                        >
                            Choose Log
                        </label>
                    </div>
                </div>
                    {/* ============= FILE NAME MESSAGE =============*/}
                    <div className={style.gridFileName}>
                <p>{fileName.startsWith("EventLog") ?<><strong>Selected file</strong>: {fileName} ✅</> : (fileName.length > 1 && <><strong>⚠️ Warning</strong>: {fileName}</>)}</p>
                <hr />
                </div>
                {isFileTaken && 
                <>
                {/* ============= FILTERS 1 =============*/}

                <div className={style.gridFiltersOne}>
                    <div className={style.boxOne}>
                        <strong>Graph</strong>:
                        <br />
                    <select value={selectedGraph} onChange={() => "ciao"}>
                    <option value="">-</option>
                    <option value="opzione1">Count</option>
                    <option value="opzione2">Err per day</option>
                </select>
                    </div>
                    <div className={style.boxTwo}>
                        <strong>Error</strong>:
                        <br />
                        <select value={selectedError} onChange={() => "ciao"}>
                        <option value="">-</option>
                        {errorCounts.map((errorCount) => (
                            <option key={errorCount.errorCode} value={errorCount.errorCode}>
                            {errorCount.errorCode}
                            </option>
                        ))}
                    </select>
                    </div>
                </div>

                {/* ============= FILTERS 2 =============*/}

                {minRange !== null && maxRange !== null && (
                    <div className={style.gridFiltersTwo}>
                        <strong>Range of dates:</strong>
                        <br />
                        <span className={style.multiRange}>
                            <input 
                                type="range" 
                                min={minRange}
                                max={maxRange}
                                id={style.lower}
                                value={lowerVal}
                                onChange={handleLowerInput}/>
                            <input 
                                type="range" 
                                min={minRange}
                                max={maxRange}
                                id={style.upper}
                                value={upperVal}
                                onChange={handleUpperInput}
                            />
                        </span>
                        <br />
                        <span className={style.showDate}>{formatUnix(lowerVal)} - {formatUnix(upperVal)}</span>
                    </div>
                )}

                
                <div className={style.gridPlot}>
                    <BarChart data={errorCounts} />
                </div>
                </>
                }
                </div>
            </>
    );
};

function formatUnix(unixDate: number) {
    const date = new Date(unixDate * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}/${month}/${day}`;

}

export default LogSummary;

function reduceData(logsData: LogData[]) {
    const errorCounts: ErrorCount[] = Object.values(logsData.reduce((acc: {[key: string]: ErrorCount}, log: LogData) => {
        if (acc[log.errorCode]) {
            acc[log.errorCode].count++;
        } else {
            acc[log.errorCode] = { errorCode: log.errorCode, count: 1 };
        }
        return acc;
    }, {}));

    const errorCountsSorted = errorCounts.sort((a, b) => b.count - a.count);
    
    return errorCountsSorted;
}