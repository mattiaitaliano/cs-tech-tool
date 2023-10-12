use std::process::Command;

#[tauri::command]
pub fn delete_nbus_data() -> [String; 2] {

    let ps_command = r#"Remove-Item -Path 'C:/ProgramData/TW/CSDMLite/nbus.data' -Force"#;

    match Command::new("powershell")
        .args(&[
            "-Command",
            &format!(r#"Start-Process powershell -ArgumentList "-NoProfile -ExecutionPolicy Bypass -Command {}" -Verb RunAs -WindowStyle Hidden"#, ps_command)
        ])
        .status() {
            Ok(status) => {
                if !status.success() {
                    return [format!("ERROR"), format!("Can't find the right folder")];
                } else {
                    return [format!("Task Completed!"), format!("nbus.data has been deleted correctly.")];
                }
            }
            Err(_e) => {
                return [format!("ERROR"), format!("File missing. Contact Carestream Dental Support.")];
            }
        }
}
