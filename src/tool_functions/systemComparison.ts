import {SystemInfo} from "../tools/SystemInfo";

type TypeOfComponent = "cpu" | "ram" | "hd" | "gpu" | "cuda" | "os";


function getMaxGPUMemoryInGB(memoryString: string) {
    let memoryValues = memoryString.split(' ').map(Number);
    let memoryValuesInGB = memoryValues.map(bytes => bytes / (1024 ** 3));
    let maxMemory = Math.max(...memoryValuesInGB);
    return maxMemory.toFixed(2);
}


export function formatSystemInfo(systemInfo: SystemInfo): SystemInfo {
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
        cpu: systemInfo.cpu.substring(5),
        gpu: systemInfo.gpu.substring(5),
        ram: ramGB,
        hard_disk: hdGB,
        cuda: cudaVersion,
        os: systemInfo.os.substring(8),
        core: Number(String(systemInfo.core).substring(14)),
        threads: Number(String(systemInfo.threads).substring(26)),
        clock: Number(String(systemInfo.clock).substring(14))/1000,
        gpu_ram: getMaxGPUMemoryInGB(systemInfo.gpu_ram.substring(11))
    };
}

function regexComparison(data: string, driver: string): boolean {
    const regex = /(\d+(\.\d+)?)\s*GB/; 
    const regexSystem = data.match(regex);
    const regexRequired = driver.match(regex);
    if (regexSystem && regexRequired) {
        const systemRam = parseFloat(regexSystem[1]);
        const requiredRam = parseFloat(regexRequired[1]); 
        return systemRam >= requiredRam;
    }
    return false;
}

function regexWindowsComparison(data: string, driver: string): boolean {
    const regex = /Microsoft Windows (\d+) (Home|Pro|Professional|Enterprise|Education|)/; 
    const regexSystem = data.match(regex);
    const regexRequired = driver.match(regex);

    if (regexSystem && regexRequired) {
        const systemVersion = Number(regexSystem[1]);
        const requiredVersion = Number(regexRequired[1]); 

        if (systemVersion < requiredVersion) {
            return false;
        }

        if (systemVersion === requiredVersion) {
            const systemEdition = regexSystem[2];
            const requiredEdition = regexRequired[2];
            const validEditions = ["Home", "Pro", "Professional", "Enterprise", "Education"];
            return (systemEdition === requiredEdition) || validEditions.includes(systemEdition);
        }
        return true;
    }
    return false;
}

function regexCudaComparison(data: string, driver: string): boolean {
    const regex = /(\d+\.\d+)/;
    const regexRequired = driver.match(regex);

    if (regexRequired) {
        const requiredCuda = parseFloat(regexRequired[1]);
        const systemCuda = parseFloat(data);
        return systemCuda >= requiredCuda;        
    }
    return false;
}


function formatForComparison(type: string, data: string | number, driver: string | number, cpuComponent = ""): boolean {
    let result: boolean;
    switch(type) {
        case "cpu":
            if (cpuComponent === "core") {
                result = +data >= +driver;
                break;
            }
            if (cpuComponent === "threads") {
                result = +data >= +driver;
                break;
            }
            if (cpuComponent === "clock") {
                result = +data >= +driver;
                break;
            }
            result = false;
            break
        case "ram":
            if (String(driver) !== "N/A") {
                result = regexComparison(String(data), String(driver));
                break;
            }
            result = true;
            break;
        case "hd":
            if (String(driver) !== "N/A") {
                result = regexComparison(String(data), String(driver));
                break;
            }
            result = true;
            break;
        case "gpu":
            result = Number(data) >= Number(driver);
            break;
        case "cuda":
            if (String(driver) !== "N/A") {
                result = regexCudaComparison(String(data), String(driver));
                break;
            }
            result = true;
            break;
        case "os":
            result = regexWindowsComparison(String(data), String(driver));
            break;
        default:
            result = true;   
        }
    return result;
}

export function compareSpecifics(type: TypeOfComponent, data: SystemInfo, driver: SystemInfo): string {
    let result: string;
    switch(type) {
        case "cpu":
            const core = formatForComparison(type, data.core, driver.core, "core");
            const threads = formatForComparison(type, data.threads, driver.threads, "threads");
            const clock = formatForComparison(type, data.clock, driver.clock, "clock");
            if (core && threads && clock) {
                result = '✅';
                break;
            } else if (core && threads) {
                result = '⚠️';
                break;
            }
            result = '❌';
            break;
        case "ram":
            const ram = formatForComparison(type, data.ram, driver.ram);
            const regex = /(\d+(\.\d+)?)\s*GB/;
            const regexResult = data.ram.match(regex);
            if (ram && regexResult) {
                const systemRAM = parseFloat(regexResult[1]);
                if (driver.name === "cs9600") {
                    systemRAM >= 32 ? result = '✅' : result = '⚠️';
                    break;
                }
                result = '✅'
                break;
            }
            result = '❌';
            break;
        case "hd":
            const hd = formatForComparison(type, data.hard_disk, driver.hard_disk);
            (hd) ? result = '✅' : result = '❌';
            break;
        case "gpu":
            const gpu = formatForComparison(type, data.gpu_ram, driver.gpu_ram);
            (gpu) ? result = '✅' : result = '❌';
            break;
        case "cuda":
            const cuda = formatForComparison(type, data.cuda, driver.cuda);
            (cuda) ? result = '✅' : result = '❌';
            break;
        case "os":
            const os = formatForComparison(type, data.os, driver.os);
            (os) ? result = '✅' : result = '⚠️';
            break;
        default:
            result = '❌'
    }
    return result;
}