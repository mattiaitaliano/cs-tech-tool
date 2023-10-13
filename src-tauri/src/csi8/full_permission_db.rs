use std::process::Command;

#[tauri::command]
pub fn full_permission_db(db_path: String) -> [String; 2] {
    match Command::new("powershell")
    .args(&[
        "-Command",
        &format!(r#"Start-Process cmd.exe -ArgumentList '/c icacls "{}" /grant Everyone:(OI)(CI)F /T' -Verb RunAs -WindowStyle Hidden"#, db_path)
    ])
    .status() {
            Ok(status) => {
                if !status.success() {
                    return [format!("ERROR"), format!("Permision denied! Do it manually.")];
                } else {
                    return [format!("Task Completed!"), format!("Full permissions has been assigned to the given path correctly.")];
                }
            }
            Err(_e) => {
                return [format!("ERROR"), format!("Permision denied! Do it manually.")];
            }
        }
}