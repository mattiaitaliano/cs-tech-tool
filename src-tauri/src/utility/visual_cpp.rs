use std::process::Command;

#[tauri::command]
pub fn install_cpp() -> [String; 2]{

    match Command::new("powershell")
    .args(&[
        "-Command",
        "Start-Process cmd.exe -ArgumentList '/c cd resources\\visual_cpp && install_all' -Verb RunAs"
    ])
    .status() {
            Ok(status) => {
                if !status.success() {
                    return [format!("ERROR"), format!("Permision denied! Do it manually.")];
                } else {
                    return [format!("Task Completed!"), format!("Visual C++ has been installed correctly.")];
                }
            }
            Err(_e) => {
                return [format!("ERROR"), format!("Permision denied! Do it manually.")];
            }
        }

}
