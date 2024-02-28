use std::process::Command;

////////////////////////////////////////////////////
/////////////////////// 81000 //////////////////////
////////////////////////////////////////////////////


pub fn cs8100_defender(action: String) {
    let paths = vec![
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\AcqConfigEditor.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\acquisition.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\AcquisitionSampleAdvanced.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\acq_process20_x64.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\acq_process_Win32.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\acq_process_x64.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\HostWx.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\UninstallAcqNetConfig.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\UninstallDriverCEPH_SC.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\Uninstall_CS8100SC.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\Licensing\\uninstall_LicensingCore.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Services\\AcqNetConfService.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\8100SC\\Application\\DiagModulesConfigEditor.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\8100SC\\Application\\GetDISPatientPath.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\8100SC\\Application\\ImageQualityControl.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\8100SC\\Application\\ServiceTools.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\8100SC\\Application\\IQTools\\SFR\\sfr_command.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\8100SC\\Application\\IQTools\\SFR\\bin\\win32\\sfr2.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\8100SC\\Application\\IQTools\\SFR\\bin\\win32\\sfrc.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\8100SC\\Application\\IQTools\\SFR\\bin\\win32\\sfr_command.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\8100SC\\Commons\\XMLTransform\\xsltproc.exe", 
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
