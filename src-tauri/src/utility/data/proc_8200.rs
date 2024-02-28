use std::process::Command;
use std::os::windows::process::CommandExt;

const CREATE_NO_WINDOW: u32 = 0x08000000;
////////////////////////////////////////////////////
/////////////////////// 8200 ///////////////////////
////////////////////////////////////////////////////


pub async fn cs8200_defender(action: String) {
    let paths = vec![
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\AcqConfigEditor.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\acquisition.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\AcquisitionSampleAdvanced.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\acq_process20_x64.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\acq_process_Win32.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\acq_process_x64.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\hostwx.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\UninstallAcqNetConfig.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\UninstallDriverSyracuse.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\Uninstall_CS82003D.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\plugins\\AcqPluginIOScan\\Uninstall_AcqPluginIOScan.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Services\\AcqNetConfService.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Services\\TaskQueue\\Sample.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Services\\TaskQueue\\TaskQueuePanel.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Services\\TaskQueue\\TaskQueuePluginProcess.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Services\\TaskQueue\\TaskQueueServer.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Services\\TaskQueue\\Tools\\CudaInfo.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\82003D\\Application\\DiagModulesConfigEditor.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\82003D\\Application\\ImageQualityControl.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\82003D\\Application\\ServiceTools.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\82003D\\Application\\TrackBalls_UnitTests.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\82003D\\Application\\IQTools\\SFR\\sfr_command.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\82003D\\Application\\IQTools\\SFR\\bin\\win32\\sfr2.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\82003D\\Application\\IQTools\\SFR\\bin\\win32\\sfrc.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\82003D\\Application\\IQTools\\SFR\\bin\\win32\\sfr_command.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\82003D\\Commons\\XMLTransform\\xsltproc.exe", 
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
