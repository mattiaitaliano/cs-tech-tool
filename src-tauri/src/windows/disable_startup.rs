use std::process::Command;

#[tauri::command]
pub fn disable_startup() -> [String; 2] {

    let ps_command = format!(r#"reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Power" /v HiberbootEnabled /t REG_DWORD /d 0 /f"#);

    match Command::new("powershell")
        .args(&[
            "-Command",
            &format!(r#"Start-Process cmd.exe -ArgumentList '/c {}' -Verb RunAs -WindowStyle Hidden"#, ps_command)
        ])
        .status() {
            Ok(status) => {
                if !status.success() {
                    return [format!("ERROR"), format!("Permision denied! Do it manually.")];
                } else {
                    return [format!("Task Completed!"), format!("The fast start-up has been disabled correctly.")];
                }
            }
            Err(_e) => {
                return [format!("ERROR"), format!("Permision denied! Do it manually.")];
            }
        }   
}