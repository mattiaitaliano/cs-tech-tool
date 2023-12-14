use std::process::Command;

#[tauri::command]
pub fn open_tool(path: String) -> [String; 2]{

    let command_string = format!("Start-Process cmd.exe -ArgumentList '/c cd .\\resources\\tools && {}' -Verb RunAs -WindowStyle Hidden", path);

    match Command::new("powershell")
    .args(&[
        "-Command", &command_string
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


#[tauri::command]
pub fn open_boardsave() -> [String; 2]{

    let command_string = format!(r#"Start-Process cmd.exe -ArgumentList '/c cd ".\resources\tools\boardsave\BoardSaves_Script" && BoardSave_Finder' -Verb RunAs -WindowStyle Hidden"#);

    match Command::new("powershell")
    .args(&[
        "-Command", &command_string
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
