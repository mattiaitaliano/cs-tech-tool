use std::process::Command;
use std::os::windows::process::CommandExt;

const CREATE_NO_WINDOW: u32 = 0x08000000;
////////////////////////////////////////////////////
//////////////////// 81000 SC 3D ///////////////////
////////////////////////////////////////////////////


pub fn cs8100sc3d_defender(action: String) {
    let paths = vec![
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\AcqConfigEditor.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\acquisition.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\AcquisitionSampleAdvanced.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\acq_process20_x64.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\acq_process_Win32.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\acq_process_x64.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\HostWx.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\UninstallAcqNetConfig.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\UninstallDriver3D_SC.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\Uninstall_CS8100SC3D.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Services\\AcqNetConfService.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Services\\TaskQueue\\Sample.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Services\\TaskQueue\\TaskQueuePanel.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Services\\TaskQueue\\TaskQueuePluginProcess.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Services\\TaskQueue\\TaskQueueServer.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Services\\TaskQueue\\Tools\\CudaInfo.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\8100SC3D\\Application\\DiagModulesConfigEditor.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\8100SC3D\\Application\\GetDISPatientPath.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\8100SC3D\\Application\\ImageQualityControl.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\8100SC3D\\Application\\ServiceTools.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\8100SC3D\\Application\\IQTools\\SFR\\sfr_command.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\8100SC3D\\Application\\IQTools\\SFR\\bin\\win32\\sfr2.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\8100SC3D\\Application\\IQTools\\SFR\\bin\\win32\\sfrc.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\8100SC3D\\Application\\IQTools\\SFR\\bin\\win32\\sfr_command.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\ServiceTools\\8100SC3D\\Commons\\XMLTransform\\xsltproc.exe", 
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