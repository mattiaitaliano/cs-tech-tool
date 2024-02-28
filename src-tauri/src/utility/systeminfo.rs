use std::process::Command;
use std::os::windows::process::CommandExt;

const CREATE_NO_WINDOW: u32 = 0x08000000;

use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct SystemInfo {
    cpu: String,
    gpu: String,
    ram: String,
    hard_disk: String,
    cuda: String,
    os: String,
    core: String,
    threads: String,
    clock: String,
    gpu_ram: String,
}

fn run_command(cmd: &str) -> Result<String, String> {
    let output = Command::new("cmd")
                        .args(&["/C", cmd])
                        .creation_flags(CREATE_NO_WINDOW)
                        .output();

    match output {
        Ok(output) => {
            if output.status.success() {
                Ok(String::from_utf8_lossy(&output.stdout).trim().to_string())
            } else {
                Err(format!("Error running command: {}", cmd))
            }
        }
        Err(e) => Err(format!("Failed to execute command '{}': {}", cmd, e)),
    }
}

#[tauri::command]
pub fn specifics_checking() -> Result<SystemInfo, String> {
    let cpu_info = run_command("wmic cpu get name")?;
    let gpu_info = run_command("wmic path win32_videocontroller get name")?;
    let ram_info = run_command("wmic memorychip get capacity")?;
    let hard_disk_info = run_command("wmic diskdrive get size")?;
    let cuda_version_info = run_command("nvidia-smi")?;
    let os_info = run_command("wmic os get Caption")?;
    let core_info = run_command("wmic cpu get NumberOfCores")?;
    let threads_info = run_command("wmic cpu get NumberOfLogicalProcessors")?;
    let clock_info = run_command("wmic cpu get MaxClockSpeed")?;
    let gpu_ram_info = run_command("wmic path win32_videocontroller get AdapterRAM")?;

    Ok(SystemInfo {
        cpu: cpu_info,
        gpu: gpu_info,
        ram: ram_info,
        hard_disk: hard_disk_info,
        cuda: cuda_version_info,
        os: os_info,
        core: core_info,
        threads: threads_info,
        clock: clock_info,
        gpu_ram: gpu_ram_info,
    })

}