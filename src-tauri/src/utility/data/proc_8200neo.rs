use std::process::Command;

////////////////////////////////////////////////////
///////////////////// 82000 NEO ////////////////////
////////////////////////////////////////////////////


pub fn cs8200neo_defender(action: String) {
    let paths = vec![
        "",
    ];

    for path in paths.iter() {
        let command = match action.to_lowercase().as_str() {
            "add" => format!(r#"Add-MpPreference -ExclusionPath "{}""#, path),
            "remove" => format!(r#"Remove-MpPreference -ExclusionPath "{}""#, path),
            _ => continue,
        };
        Command::new("powershell")
            .args(&["-Command", &command])
            .output()
            .expect("failed to execute process");

    }
}
