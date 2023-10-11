use std::process::Command;

#[tauri::command]
pub fn get_ip() -> String {
    
    let ps_cmd = "(Get-NetIPAddress | Where-Object { $_.IPAddress -like '192.168.*' -and $_.AddressFamily -eq 'IPv4' }).IPAddress";

    let output = Command::new("powershell")
        .arg("-Command")
        .arg(ps_cmd)
        .output()
        .expect("Failed to execute PowerShell command");

    let ip_address = String::from_utf8_lossy(&output.stdout);

    ip_address.to_string()

}
