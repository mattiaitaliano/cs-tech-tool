use std::process::Command;

#[tauri::command]
pub fn open_firewall() {

    let ports_list: [u16; 16] = [21, 1023, 10000, 10001, 20000, 20001, 33001, 1001, 80, 9002, 
        9005, 81, 10100, 52540, 52541, 9053];

    let mut commands = Vec::new();

    for port in ports_list.iter() {
        let rule_name = format!("CARESTREAM DENTAL TPC {}", port);
        let netsh_command = format!("netsh advfirewall firewall add rule name=\"{}\" dir=in action=allow protocol=TCP localport={}", rule_name, port);
        commands.push(netsh_command);
    }

    let combined_commands = commands.join(" & ");

    Command::new("powershell")
        .args(&[
            "-Command",
            &format!("Start-Process cmd.exe -ArgumentList '/c {}' -Verb RunAs -WindowStyle Hidden", combined_commands)
        ])
        .status()
        .expect("failed to execute process");
}
