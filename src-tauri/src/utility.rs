use std::process::Command;

#[tauri::command]
pub fn open_folder(path: &str) {
    match Command::new("explorer").arg(path).status() {
        Ok(status) => {
            if !status.success() {
                eprintln!("Failed to open folder with status: {:?}", status);
            }
        },
        Err(e) => {
            eprintln!("Failed to run command: {}", e);
        }
    }
}