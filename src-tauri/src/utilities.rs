use std::process::Command;

#[tauri::command]
pub fn open_folder(path: String) {
    match Command::new("explorer")
        .arg(&format!(r#"{}""#,path))
        .status() {
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

#[tauri::command]
pub fn open_file(path: &str) -> [String; 2]{
    match Command::new("start")
        .arg(path)
        .status() {
            Ok(status) => {
                if !status.success() {
                    return [format!("ERROR"), format!("Can't find the right folder")];
                } else {
                    return [format!("Task Completed!"), format!("The file was loaded correctly.")];
                }
            }
            Err(_e) => {
                return [format!("ERROR"), format!("File missing. Contact Carestream Dental Support.")];
            }
        }
}

#[tauri::command]
pub fn open_exe(path: String) -> [String; 2] {

    match Command::new("powershell")
        .args(&[
            "-Command",
            &format!(
                r#"Start-Process cmd.exe -ArgumentList '/c "{}"' -Verb RunAs -WindowStyle Hidden"#,
                path
            ),
        ])
        .status()
    {
        Ok(status) => {
            if !status.success() {
                return [format!("ERROR"), format!("Can't find the right folder")];
            } else {
                return [format!("Task Completed!"), format!("The program was loaded correctly.")];
            }
        }
        Err(_e) => {
            return [format!("ERROR"), format!("File missing. Contact Carestream Dental Support.")];
        }
    }
}


