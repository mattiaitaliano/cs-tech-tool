use std::process::Command;

use crate::utility::data;

///////////////////////////////////////////////////////////////////
////////////////////////// MAIN FUNCTIONS /////////////////////////
///////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////
///////////////////////////// DEFENDER ////////////////////////////
///////////////////////////////////////////////////////////////////

#[tauri::command]
pub fn cssecurity_defender_rules(csi: String, product: String, action: String) {
    if csi.to_lowercase() != "no_imaging" {
        match csi.as_str() {
            "csi7" => data::proc_csi7::csi7_defender(action.clone()),
            "csi8" => data::proc_csi8::csi8_defender(action.clone()),
            "csi8_server" => data::proc_csi8server::csi8server_defender(action.clone()),
            _ => data::proc_csi8server::csi8server_defender(action.clone()),
        }
    }

    if product.to_lowercase() != "no_unit" {
        match product.as_str() {
            "cs8100" => data::proc_8100::cs8100_defender(action.clone()),
            "cs8100_sc" => data::proc_8100sc::cs8100sc_defender(action.clone()),
            "cs8100_sc_3d" => data::proc_8100sc3d::cs8100sc3d_defender(action.clone()),
            "cs8100_3d" => data::proc_81003d::cs81003d_defender(action.clone()),
            "cs8200" => data::proc_8200::cs8200_defender(action.clone()),
            "cs8200_neo" => data::proc_8200neo::cs8200neo_defender(action.clone()),
            "cs9600_proxy" => data::proc_9600::cs9600_defender(action.clone()),
            _ => data::proc_8100::cs8100_defender(action.clone()),
        }
    }
    
}

///////////////////////////////////////////////////////////////////
///////////////////////////// FIREWALL ////////////////////////////
///////////////////////////////////////////////////////////////////

#[tauri::command]
pub fn cssecurity_firewall_rules(csi: String, product: String, action: String) {

    let csi_lower = csi.to_lowercase();
    let product_lower = product.to_lowercase();

    if csi_lower != "no_imaging" {
        if csi_lower == "csi8_server" {
            csi_server_firewall(action.clone());
        } else {
            csi_firewall(action.clone());
        }
    }
    
    if product_lower != "no_unit" {
        if product_lower == "cs8200" {
            cs8200_firewall(action.clone());
        } else if product_lower == "cs9600"{
            cs9600_firewall(action.clone());
        } else {
            cs8100_firewall(action);
        }
    }

}

///////////////////////////////////////////////////////////////////
/////////////////////////// SECURITY //////////////////////////////
///////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////
///////////////////// UTILITY FUNCTIONS //////////////////////////
//////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
///////////////////////////// FIREWALL ////////////////////////////
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
////////////////////////// CSI STANDALONE /////////////////////////
///////////////////////////////////////////////////////////////////

fn csi_firewall(action: String) -> [String; 2]{

    let add_commands = vec![
        "New-NetFirewallRule -DisplayName \"CSI 10001-10100 In\" -Direction Inbound -LocalPort 10001-10100 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CSI 10001-10100 Out\" -Direction Outbound -LocalPort 10001-10100 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CSI 52540 In\" -Direction Inbound -LocalPort 52540 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CSI 52540 Out\" -Direction Outbound -LocalPort 52540 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CSI 52541 In\" -Direction Inbound -LocalPort 52541 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CSI 52541 Out\" -Direction Outbound -LocalPort 52541 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CSI 9999 In\" -Direction Inbound -LocalPort 9999 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CSI 9999 Out\" -Direction Outbound -LocalPort 9999 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CSI 50000 In\" -Direction Inbound -LocalPort 50000 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CSI 50000 Out\" -Direction Outbound -LocalPort 50000 -Protocol TCP -Action Allow",
        ];
        
    let remove_commands = vec![
        "Remove-NetFirewallRule -DisplayName \"CSI 10001-10100 Out\"",
        "Remove-NetFirewallRule -DisplayName \"CSI 10001-10100 In\"",
        "Remove-NetFirewallRule -DisplayName \"CSI 52540 In\"",
        "Remove-NetFirewallRule -DisplayName \"CSI 52540 Out\"",
        "Remove-NetFirewallRule -DisplayName \"CSI 52541 In\"",
        "Remove-NetFirewallRule -DisplayName \"CSI 52541 Out\"",
        "Remove-NetFirewallRule -DisplayName \"CSI 9999 In\"",
        "Remove-NetFirewallRule -DisplayName \"CSI 9999 Out\"",
        "Remove-NetFirewallRule -DisplayName \"CSI 50000 In\"",
        "Remove-NetFirewallRule -DisplayName \"CSI 50000 Out\"",
    ];
    

    let commands = match action.to_lowercase().as_str() {
        "add" => &add_commands[..],
        "remove" => &remove_commands[..],
        _ => return [format!("ERROR"), format!("Permision denied! Do it manually.")],
    };

    let combined_commands = commands.join("; ");
        
    match std::process::Command::new("powershell")
        .args(&[
            "-Command",
            &combined_commands,
        ])
        .status() {
            Ok(status) => {
                if !status.success() {
                    return [format!("ERROR"), format!("Permision denied! Do it manually.")];
                } else {
                    return [format!("Task Completed!"), format!("The firewall ports has been opened correctly.")];
                }
            }
            Err(_e) => {
                return [format!("ERROR"), format!("Permision denied! Do it manually.")];
            }
        }
}

///////////////////////////////////////////////////////////////////
///////////////////////////// CSI SERVER //////////////////////////
///////////////////////////////////////////////////////////////////

fn csi_server_firewall(action: String) -> [String; 2]{

    let add_commands = vec![
        "New-NetFirewallRule -DisplayName \"CSI8v3 80 In\" -Direction Inbound -LocalPort 80 -Protocol TCP -Action Allow",  
        "New-NetFirewallRule -DisplayName \"CSI8v3 80 Out\" -Direction Outbound -LocalPort 80 -Protocol TCP -Action Allow", 
        "New-NetFirewallRule -DisplayName \"CSI8v3 443 In\" -Direction Inbound -LocalPort 443 -Protocol TCP -Action Allow", 
        "New-NetFirewallRule -DisplayName \"CSI8v3 443 Out\" -Direction Outbound -LocalPort 443 -Protocol TCP -Action Allow",  
        "New-NetFirewallRule -DisplayName \"CSI8v3 9002 In\" -Direction Inbound -LocalPort 9002 -Protocol TCP -Action Allow",  
        "New-NetFirewallRule -DisplayName \"CSI8v3 9002 Out\" -Direction Outbound -LocalPort 9002 -Protocol TCP -Action Allow", 
        "New-NetFirewallRule -DisplayName \"CSI8v3 9005 In\" -Direction Inbound -LocalPort 9005 -Protocol TCP -Action Allow", 
        "New-NetFirewallRule -DisplayName \"CSI8v3 9005 Out\" -Direction Outbound -LocalPort 9005 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CSI8v3 9999 In\" -Direction Inbound -LocalPort 9999 -Protocol TCP -Action Allow", 
        "New-NetFirewallRule -DisplayName \"CSI8v3 9999 Out\" -Direction Outbound -LocalPort 9999 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CSI8v3 10001-10100 In\" -Direction Inbound -LocalPort 10001-10100 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CSI8v3 10001-10100 Out\" -Direction Outbound -LocalPort 10001-10100 -Protocol TCP -Action Allow", 
        "New-NetFirewallRule -DisplayName \"CSI8v3 50000 In\" -Direction Inbound -LocalPort 50000 -Protocol TCP -Action Allow", 
        "New-NetFirewallRule -DisplayName \"CSI8v3 50000 Out\" -Direction Outbound -LocalPort 50000 -Protocol TCP -Action Allow", 
        "New-NetFirewallRule -DisplayName \"CSI8v3 50920 In\" -Direction Inbound -LocalPort 50920 -Protocol UDP -Action Allow", 
        "New-NetFirewallRule -DisplayName \"CSI8v3 50920 Out\" -Direction Outbound -LocalPort 50920 -Protocol UDP -Action Allow", 
        "New-NetFirewallRule -DisplayName \"CSI8v3 52540 In\" -Direction Inbound -LocalPort 52540 -Protocol TCP -Action Allow", 
        "New-NetFirewallRule -DisplayName \"CSI8v3 52540 Out\" -Direction Outbound -LocalPort 52540 -Protocol TCP -Action Allow", 
        "New-NetFirewallRule -DisplayName \"CSI8v3 52541 In\" -Direction Inbound -LocalPort 52541 -Protocol TCP -Action Allow", 
        "New-NetFirewallRule -DisplayName \"CSI8v3 52541 Out\" -Direction Outbound -LocalPort 52541 -Protocol TCP -Action Allow", 
        ];
        
    let remove_commands = vec![
        "Remove-NetFirewallRule -DisplayName \"CSI8v3 80 In\"",
        "Remove-NetFirewallRule -DisplayName \"CSI8v3 80 Out\"",
        "Remove-NetFirewallRule -DisplayName \"CSI8v3 443 In\"",
        "Remove-NetFirewallRule -DisplayName \"CSI8v3 443 Out\"",
        "Remove-NetFirewallRule -DisplayName \"CSI8v3 9002 In\"",
        "Remove-NetFirewallRule -DisplayName \"CSI8v3 9002 Out\"",
        "Remove-NetFirewallRule -DisplayName \"CSI8v3 9005 In\"",
        "Remove-NetFirewallRule -DisplayName \"CSI8v3 9005 Out\"",
        "Remove-NetFirewallRule -DisplayName \"CSI8v3 9999 In\"",
        "Remove-NetFirewallRule -DisplayName \"CSI8v3 9999 Out\"",
        "Remove-NetFirewallRule -DisplayName \"CSI8v3 10001-10100 In\"",
        "Remove-NetFirewallRule -DisplayName \"CSI8v3 10001-10100 Out\"",
        "Remove-NetFirewallRule -DisplayName \"CSI8v3 50000 In\"",
        "Remove-NetFirewallRule -DisplayName \"CSI8v3 50000 Out\"",
        "Remove-NetFirewallRule -DisplayName \"CSI8v3 50920 In\"",
        "Remove-NetFirewallRule -DisplayName \"CSI8v3 50920 Out\"",
        "Remove-NetFirewallRule -DisplayName \"CSI8v3 52540 In\"",
        "Remove-NetFirewallRule -DisplayName \"CSI8v3 52540 Out\"",
        "Remove-NetFirewallRule -DisplayName \"CSI8v3 52541 In\"",
        "Remove-NetFirewallRule -DisplayName \"CSI8v3 52541 Out\"",
    ];
    

    let commands = match action.to_lowercase().as_str() {
        "add" => &add_commands[..],
        "remove" => &remove_commands[..],
        _ => return [format!("ERROR"), format!("Permision denied! Do it manually.")],
    };

    let combined_commands = commands.join("; ");
        
    match std::process::Command::new("powershell")
        .args(&[
            "-Command",
            &combined_commands,
        ])
        .status() {
            Ok(status) => {
                if !status.success() {
                    return [format!("ERROR"), format!("Permision denied! Do it manually.")];
                } else {
                    return [format!("Task Completed!"), format!("The firewall ports has been opened correctly.")];
                }
            }
            Err(_e) => {
                return [format!("ERROR"), format!("Permision denied! Do it manually.")];
            }
        }
}

///////////////////////////////////////////////////////////////////
/////////////////////////////// CS8100 ////////////////////////////
///////////////////////////////////////////////////////////////////

fn cs8100_firewall(action: String) -> [String; 2]{

    let add_commands = vec![
        "New-NetFirewallRule -DisplayName \"CS8100 21 TCP In\" -Direction Inbound -LocalPort 21 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8100 21 TCP Out\" -Direction Outbound -LocalPort 21 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8100 Bonjour 5354\" -Direction Inbound -LocalPort 5354 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8100 Bonjour 5354\" -Direction Outbound -LocalPort 5354 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8100 1001 UDP In\" -Direction Inbound -LocalPort 1001 -Protocol UDP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8100 1001 UDP Out\" -Direction Outbound -LocalPort 1001 -Protocol UDP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8100 10000 TCP In\" -Direction Inbound -LocalPort 10000 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8100 10000 TCP Out\" -Direction Outbound -LocalPort 10000 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8100 10001 TCP In\" -Direction Inbound -LocalPort 10001 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8100 10001 TCP Out\" -Direction Outbound -LocalPort 10001 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8100 20000 TCP In\" -Direction Inbound -LocalPort 20000 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8100 20000 TCP Out\" -Direction Outbound -LocalPort 20000 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8100 20001 TCP In\" -Direction Inbound -LocalPort 20001 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8100 20001 TCP Out\" -Direction Outbound -LocalPort 20001 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8100 33001 TCP In\" -Direction Inbound -LocalPort 33001 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8100 33001 TCP Out\" -Direction Outbound -LocalPort 33001 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8100 33002 TCP In\" -Direction Inbound -LocalPort 33002 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8100 33002 TCP Out\" -Direction Outbound -LocalPort 33002 -Protocol TCP -Action Allow",
        ];
        
    let remove_commands = vec![
        "Remove-NetFirewallRule -DisplayName \"CS8100 21 TCP In\"",
        "Remove-NetFirewallRule -DisplayName \"CS8100 21 TCP Out\"",
        "Remove-NetFirewallRule -DisplayName \"CS8100 Bonjour 5354\"",
        "Remove-NetFirewallRule -DisplayName \"CS8100 Bonjour 5354\"",
        "Remove-NetFirewallRule -DisplayName \"CS8100 1001 UDP In\"",
        "Remove-NetFirewallRule -DisplayName \"CS8100 1001 UDP Out\"",
        "Remove-NetFirewallRule -DisplayName \"CS8100 10000 TCP In\"",
        "Remove-NetFirewallRule -DisplayName \"CS8100 10000 TCP Out\"",
        "Remove-NetFirewallRule -DisplayName \"CS8100 10001 TCP In\"",
        "Remove-NetFirewallRule -DisplayName \"CS8100 10001 TCP Out\"",
        "Remove-NetFirewallRule -DisplayName \"CS8100 20000 TCP In\"",
        "Remove-NetFirewallRule -DisplayName \"CS8100 20000 TCP Out\"",
        "Remove-NetFirewallRule -DisplayName \"CS8100 20001 TCP In\"",
        "Remove-NetFirewallRule -DisplayName \"CS8100 20001 TCP Out\"",
        "Remove-NetFirewallRule -DisplayName \"CS8100 33001 TCP In\"",
        "Remove-NetFirewallRule -DisplayName \"CS8100 33001 TCP Out\"",
        "Remove-NetFirewallRule -DisplayName \"CS8100 33002 TCP In\"",
        "Remove-NetFirewallRule -DisplayName \"CS8100 33002 TCP Out\"",
    ];
    

    let commands = match action.to_lowercase().as_str() {
        "add" => &add_commands[..],
        "remove" => &remove_commands[..],
        _ => return [format!("ERROR"), format!("Permision denied! Do it manually.")],
    };

    let combined_commands = commands.join("; ");
        
    match std::process::Command::new("powershell")
        .args(&[
            "-Command",
            &combined_commands,
        ])
        .status() {
            Ok(status) => {
                if !status.success() {
                    return [format!("ERROR"), format!("Permision denied! Do it manually.")];
                } else {
                    return [format!("Task Completed!"), format!("The firewall ports has been opened correctly.")];
                }
            }
            Err(_e) => {
                return [format!("ERROR"), format!("Permision denied! Do it manually.")];
            }
        }
}

///////////////////////////////////////////////////////////////////
////////////////////////////// CS8200 /////////////////////////////
///////////////////////////////////////////////////////////////////

fn cs8200_firewall(action: String) -> [String; 2]{

    let add_commands = vec![
        "New-NetFirewallRule -DisplayName \"CS8200 21 TCP In\" -Direction Inbound -LocalPort 21 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8200 21 TCP Out\" -Direction Outbound -LocalPort 21 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8200 1001 UDP In\" -Direction Inbound -LocalPort 1001 -Protocol UDP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8200 1001 UDP Out\" -Direction Outbound -LocalPort 1001 -Protocol UDP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8200 10000 TCP In\" -Direction Inbound -LocalPort 10000 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8200 10000 TCP Out\" -Direction Outbound -LocalPort 10000 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8200 10001 TCP In\" -Direction Inbound -LocalPort 10001 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8200 10001 TCP Out\" -Direction Outbound -LocalPort 10001 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8200 20000 TCP In\" -Direction Inbound -LocalPort 20000 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8200 20000 TCP Out\" -Direction Outbound -LocalPort 20000 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8200 20001 TCP In\" -Direction Inbound -LocalPort 20001 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8200 20001 TCP Out\" -Direction Outbound -LocalPort 20001 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8200 33001 TCP In\" -Direction Inbound -LocalPort 33001 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8200 33001 TCP Out\" -Direction Outbound -LocalPort 33001 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8200 33002 TCP In\" -Direction Inbound -LocalPort 33002 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8200 33002 TCP Out\" -Direction Outbound -LocalPort 33002 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8200 Bonjour 5354\" -Direction Inbound -LocalPort 5354 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS8200 Bonjour 5354\" -Direction Outbound -LocalPort 5354 -Protocol TCP -Action Allow",
        ];
        
    let remove_commands = vec![
        "Remove-NetFirewallRule -DisplayName \"CS8200 21 TCP In\"",
        "Remove-NetFirewallRule -DisplayName \"CS8200 21 TCP Out\"",
        "Remove-NetFirewallRule -DisplayName \"CS8200 1001 UDP In\"",
        "Remove-NetFirewallRule -DisplayName \"CS8200 1001 UDP Out\"",
        "Remove-NetFirewallRule -DisplayName \"CS8200 10000 TCP In\"",
        "Remove-NetFirewallRule -DisplayName \"CS8200 10000 TCP Out\"",
        "Remove-NetFirewallRule -DisplayName \"CS8200 10001 TCP In\"",
        "Remove-NetFirewallRule -DisplayName \"CS8200 10001 TCP Out\"",
        "Remove-NetFirewallRule -DisplayName \"CS8200 20000 TCP In\"",
        "Remove-NetFirewallRule -DisplayName \"CS8200 20000 TCP Out\"",
        "Remove-NetFirewallRule -DisplayName \"CS8200 20001 TCP In\"",
        "Remove-NetFirewallRule -DisplayName \"CS8200 20001 TCP Out\"",
        "Remove-NetFirewallRule -DisplayName \"CS8200 33001 TCP In\"",
        "Remove-NetFirewallRule -DisplayName \"CS8200 33001 TCP Out\"",
        "Remove-NetFirewallRule -DisplayName \"CS8200 33002 TCP In\"",
        "Remove-NetFirewallRule -DisplayName \"CS8200 33002 TCP Out\"",
        "Remove-NetFirewallRule -DisplayName \"CS8200 Bonjour 5354\"",
        "Remove-NetFirewallRule -DisplayName \"CS8200 Bonjour 5354\"",
    ];
    

    let commands = match action.to_lowercase().as_str() {
        "add" => &add_commands[..],
        "remove" => &remove_commands[..],
        _ => return [format!("ERROR"), format!("Permision denied! Do it manually.")],
    };

    let combined_commands = commands.join("; ");
        
    match std::process::Command::new("powershell")
        .args(&[
            "-Command",
            &combined_commands,
        ])
        .status() {
            Ok(status) => {
                if !status.success() {
                    return [format!("ERROR"), format!("Permision denied! Do it manually.")];
                } else {
                    return [format!("Task Completed!"), format!("The firewall ports has been opened correctly.")];
                }
            }
            Err(_e) => {
                return [format!("ERROR"), format!("Permision denied! Do it manually.")];
            }
        }
}

///////////////////////////////////////////////////////////////////
////////////////////////////// CS9600 /////////////////////////////
///////////////////////////////////////////////////////////////////

fn cs9600_firewall(action: String) -> [String; 2]{

    let add_commands = vec![
        "New-NetFirewallRule -DisplayName \"CS9600 80 In\" -Direction Inbound -LocalPort 80 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS9600 80 Out\" -Direction Outbound -LocalPort 80 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS9600 443 In\" -Direction Inbound -LocalPort 443 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS9600 443 Out\" -Direction Outbound -LocalPort 443 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS9600 3389 In\" -Direction Inbound -LocalPort 3389 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS9600 3389 Out\" -Direction Outbound -LocalPort 3389 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS9600 Bonjour 5354\" -Direction Inbound -LocalPort 5354 -Protocol TCP -Action Allow",
        "New-NetFirewallRule -DisplayName \"CS9600 Bonjour 5354\" -Direction Outbound -LocalPort 5354 -Protocol TCP -Action Allow",
    ];
        
    let remove_commands = vec![
        "Remove-NetFirewallRule -DisplayName \"CS9600 80 In\"",
        "Remove-NetFirewallRule -DisplayName \"CS9600 80 Out\"",
        "Remove-NetFirewallRule -DisplayName \"CS9600 443 In\"",
        "Remove-NetFirewallRule -DisplayName \"CS9600 443 Out\"",
        "Remove-NetFirewallRule -DisplayName \"CS9600 3389 In\"",
        "Remove-NetFirewallRule -DisplayName \"CS9600 3389 Out\"",
        "Remove-NetFirewallRule -DisplayName \"CS9600 Bonjour 5354\"",
        "Remove-NetFirewallRule -DisplayName \"CS9600 Bonjour 5354\"",
    ];
    

    let commands = match action.to_lowercase().as_str() {
        "add" => &add_commands[..],
        "remove" => &remove_commands[..],
        _ => return [format!("ERROR"), format!("Permision denied! Do it manually.")],
    };

    let combined_commands = commands.join("; ");
        
    match std::process::Command::new("powershell")
        .args(&[
            "-Command",
            &combined_commands,
        ])
        .status() {
            Ok(status) => {
                if !status.success() {
                    return [format!("ERROR"), format!("Permision denied! Do it manually.")];
                } else {
                    return [format!("Task Completed!"), format!("The firewall ports has been opened correctly.")];
                }
            }
            Err(_e) => {
                return [format!("ERROR"), format!("Permision denied! Do it manually.")];
            }
        }
}