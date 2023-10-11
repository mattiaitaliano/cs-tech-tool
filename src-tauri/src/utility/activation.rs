use std::process::Command;

#[tauri::command]
pub fn reset_activation_client() {

    let ps_command = r#"Remove-Item -Path 'C:/ProgramData/TW/ActivationClient.db', 'C:/ProgramData/TW/ActivationClient.log' -Force"#;

    Command::new("powershell")
        .args(&[
            "-Command",
            &format!(r#"Start-Process powershell -ArgumentList "-NoProfile -ExecutionPolicy Bypass -Command {}" -Verb RunAs -WindowStyle Hidden"#, ps_command)
        ])
        .status()
        .expect("failed to execute process");
}
