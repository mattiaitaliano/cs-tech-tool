use std::process::Command;

#[tauri::command]
pub fn dis_license() -> [String; 2]{

    match Command::new("powershell")
    .args(&[
        "-Command",
        "Start-Process cmd.exe -ArgumentList '/c cd .\\resources\\dis_license && license' -Verb RunAs -WindowStyle Hidden"
    ])
    .status() {
            Ok(status) => {
                if !status.success() {
                    return [format!("ERROR"), format!("Permision denied! Do it manually.")];
                } else {
                    return [format!("Task Completed!"), format!("DIS Licensing has been opened correctly.")];
                }
            }
            Err(_e) => {
                return [format!("ERROR"), format!("Permision denied! Do it manually.")];
            }
        }

}
