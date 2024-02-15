use std::process::Command;
use std::path::Path;

#[tauri::command]
pub fn cssecurity_defender_rules(product: String, action: String) -> String {

    let script_base_path = "./resources/scripts/cssecuritytool/scripts/";

    let (script_path_processes, script_path_paths) = match action.as_str() {
        "Add" => (
            format!("{}Script_WindowsDefender_ExclusionProcesses{}.ps1", script_base_path, product),
            format!("{}Script_WindowsDefender_ExclusionPaths.ps1", script_base_path)
        ),
        "Remove" => (
            format!("{}Remove/Script_WindowsDefender_ExclusionProcesses{}.ps1", script_base_path, product),
            format!("{}Remove/Script_WindowsDefender_ExclusionPaths.ps1", script_base_path)
        ),
        _ => return format!("Invalid action specified: {}", action),
    };

    let commands = [
        format!(r#"powershell -ExecutionPolicy Bypass -File "{}""#, script_path_processes),
        format!(r#"powershell -ExecutionPolicy Bypass -File "{}""#, script_path_paths)
    ];

    for cmd in commands {
        println!("{}", cmd);
        match Command::new("powershell")
            .arg(&cmd)
            .output()
        {
            Ok(output) => {
                if !output.status.success() {
                    return "Script execution failed".to_string();
                }
            }
            Err(e) => return format!("Failed to execute script: {}", e),
        }
    }

    "Scripts executed successfully".to_string()
}


#[tauri::command]
pub fn cssecurity_firewall_rules(firewall: String, action: String) -> String {
    
    let script_base_path = "./resources/scripts/cssecuritytool/firewall/";

    let script_path = match action.as_str() {
        "Add" => format!("{}{}.ps1", script_base_path, firewall),
        "Remove" => format!("{}/Remove/{}.ps1", script_base_path, firewall),
        _ => return format!("Invalid action specified: {}", action),
    };

    if !Path::new(&script_path).exists() {
        println!("The path selected doesn't exist: {}", script_path);
    }

    let script_command = format!(r#"powershell -ExecutionPolicy Bypass -File "{}""#, script_path);

    match Command::new("powershell")
    .arg(&script_command)
    .output()
    {
        Ok(output) => {
            if !output.status.success() {
                return "Script execution failed".to_string();
            }
        }
        Err(e) => return format!("Failed to execute script: {}", e),
    }

    "Scripts executed successfully".to_string()
}

#[tauri::command]
pub fn cssecurity_security_rules() -> String {
    let directories = vec![
        "C:\\Program Files\\Carestream",
        "C:\\Program Files\\Common Files\\Trophy",
        "C:\\Program Files (x86)\\Carestream",
        "C:\\Program Files (x86)\\Common Files\\Trophy",
        "C:\\Program Files (x86)\\Common Files\\Carestream",
        "C:\\ProgramData\\TW",
        "C:\\Users\\Public\\Documents\\Carestream",
    ];

    let permissions = vec![
        "(OI)(CI)RX",
        "(OI)(CI)RX",
        "(OI)(CI)RX",
        "(OI)(CI)RX",
        "(OI)(CI)RX",
        "(OI)(CI)F",
        "(OI)(CI)F",
    ];

    for (dir, perm) in directories.iter().zip(permissions.iter()) {
        match Command::new("icacls")
            .arg(dir)
            .arg("/grant")
            .arg(format!("Everyone:{}", perm))
            .output()
            {
                Ok(output) => {
                    if !output.status.success() {
                        return "Script execution failed".to_string();
                    }
                }
                Err(e) => return format!("Failed to execute script: {}", e),
            }
        }

    "Scripts executed successfully".to_string()
}