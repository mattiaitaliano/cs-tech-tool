use std::process::Command;

use std::os::windows::process::CommandExt;

const CREATE_NO_WINDOW: u32 = 0x08000000;

#[tauri::command]
pub fn open_folder(path: String) {
    match Command::new("explorer")
        .arg(&format!(r#"{}""#,path))
        .creation_flags(CREATE_NO_WINDOW)
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

    match Command::new("cmd")
        .args(&[&format!("/c start {}", path)])
        .creation_flags(CREATE_NO_WINDOW)
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
pub fn copy_file(path: &str) -> [String; 2]{

    let ps_script = format!(r#"
        $sourceFilePath = ".\{}"
        $desktopPath = [System.Environment]::GetFolderPath('Desktop')
        $destinationFilePath = Join-Path $desktopPath -ChildPath "exceptions_folder.txt"
        Copy-Item -Path sourceFilePath -Destination $destinationFilePath -Force 
        "#, path);

    match Command::new("powershell")
        .args(&[
            "-Command",
            &format!(
                r#"Start-Process powershell -ArgumentList '{}' -Verb RunAs -WindowStyle Hidden"#,
                ps_script
            ),
        ])
        .creation_flags(CREATE_NO_WINDOW)
        .status() {
            Ok(status) => {
                if !status.success() {
                    return [format!("ERROR"), format!("Can't find the right folder")];
                } else {
                    return [format!("Task Completed!"), format!("The file was copied in the Desktop correctly.")];
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
        .creation_flags(CREATE_NO_WINDOW)
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


