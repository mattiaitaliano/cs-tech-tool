use std::process::Command;

#[tauri::command]
pub fn clean_installation() -> [String; 2] {

    match Command::new("powershell")
    .args(&[
        "-Command",
        r#"Start-Process -FilePath "powershell" -ArgumentList "-ExecutionPolicy Bypass -File ./resources/scripts/clean_installation.ps1" -Verb RunAs -WindowStyle Hidden"#
    ])
    .status() {
        Ok(status) => {
            if !status.success() {
                return [format!("ERROR"), format!("Permission denied! Do it manually.")];
            } else {
                return [format!("Task Completed!"), format!("CS Imaging 8 residual files have been deleted correctly!")];
            }
        }
        Err(_e) => {
            return [format!("ERROR"), format!("Permission denied! Do it manually.")];
        }
    }

}
