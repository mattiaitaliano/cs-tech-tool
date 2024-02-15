use std::process::Command;
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct SystemInfo {
    cpu: String,
    gpu: String,
    ram: String,
    hard_disk: String,
    cuda: String,
    os: String
}

fn run_command(cmd: &str) -> Result<String, String> {
    let output = Command::new("cmd")
                        .args(&["/C", cmd])
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

    Ok(SystemInfo {
        cpu: cpu_info,
        gpu: gpu_info,
        ram: ram_info,
        hard_disk: hard_disk_info,
        cuda: cuda_version_info,
        os: os_info
    })

}