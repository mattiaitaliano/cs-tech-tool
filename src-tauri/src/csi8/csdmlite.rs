use std::process::Command;

#[tauri::command]
pub fn reset_csdmlite() -> [String; 2] {
    let script_path = "../../scripts/reset_csdmlite.ps1";

    let output = Command::new("powershell")
        .arg(script_path)
        .output();

    match output {
        Ok(output) => {
            let output_str = String::from_utf8_lossy(&output.stdout);
            if output_str.contains("FileNotFound") {
                [format!("ERROR"), format!("Required file not found.")]
            } else if output_str.contains("Success") {
                [format!("Task Completed!"), format!("CSDMLite has been reset successfully.")]
            } else {
                [format!("ERROR"), format!("Unknown error occurred.")]
            }
        }
        Err(_e) => {
            [format!("ERROR"), format!("Script not found or unable to execute. Check the path and permissions.")]
        }
    }
}

