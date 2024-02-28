use std::process::Command;
use std::os::windows::process::CommandExt;

const CREATE_NO_WINDOW: u32 = 0x08000000;
////////////////////////////////////////////////////
/////////////////////// CSI8 ///////////////////////
////////////////////////////////////////////////////


pub fn csi8_defender(action: String) {
    let paths = vec![
        "C:\\Program Files (x86)\\Carestream\\CSI Suite uninst.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\AcqTwain.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\command_tool.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\CSDMLewdog.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\CSDMLite.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\export_ps.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\fttfx.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\set_configuration.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\shutdown_tool.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\sqlite3.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\uninstallCSDML.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\IngestCodebase\\codebase_cli.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\IngestCodebase\\ingestcodebase.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\AcqTwain.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\AnnotationRenderer.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\csds.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\csds_config.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\QuickBurn.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\ReconstructionHandler.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\TConvert.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\TW.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\TWV.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\uilog.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\uninst.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\UninstallTConvert.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\FMSEditor\\FMSEditor.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\RJViewer\\RJViewer.exe", 
        "C:\\Program Files (x86)\\Carestream\\Film Composer\\FilmComposer.exe", 
        "C:\\Program Files (x86)\\Carestream\\Film Composer\\storescu.exe", 
        "C:\\Program Files (x86)\\Carestream\\Film Composer\\UninstallFilmComposer.exe", 
        "C:\\Program Files (x86)\\Carestream\\Monitor\\monitor.exe", 
        "C:\\Program Files (x86)\\Carestream\\Monitor\\UninstallMonitor.exe", 
        "C:\\Program Files (x86)\\Common Files\\Carestream\\Processing\\EclipseDBUninstall.exe", 
        "C:\\Program Files (x86)\\Common Files\\Carestream\\Processing\\Eclipse\\ImPrEclipse\\CreatePrImage.exe", 
        "C:\\Program Files (x86)\\Common Files\\Carestream\\Processing\\Eclipse\\ImPrEclipse\\EclipseProc.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Acquisition\\acquisition.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Acquisition\\AcquisitionSampleAdvanced.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Acquisition\\acq_process_Win32.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Acquisition\\acq_process_x64.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\ExtraoralFms\\extraoral_fms.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\ExtraoralFms\\uninst.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\IPET\\bin\\ipet.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\IPET\\bin\\uninst.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Licensing\\activate.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Licensing\\Uninstall activate.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Licensing\\resources\\elevate.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Mesh Converter\\CSMeshConverter.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Mesh Converter\\UninstallCSMeshConverter.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Processing\\DicomConvertToFp.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Processing\\DicomImg.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Processing\\DicomPack.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Processing\\DicomPdf.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Processing\\processings2DEclipse\\EclipseUninstaller.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Processing\\processings2DEquinox\\EquinoxUninstaller.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Processing\\processings2DPresets\\Factory\\FactoryPresetUninstaller.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\RA_SDK\\Appli DemoRA_SDK.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\RA_SDK\\Light_RA_SDKUninstaller.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\SDK\\Processings2D\\bin\\win32\\release\\Processings2DSampleAdvanced.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\SDK\\Processings2D\\bin\\win32\\release\\Processings2DSampleBasic.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Trace\\Trace.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Trace\\UninstallTrace.exe", 
        "C:\\Program Files\\Carestream\\Volume Converter\\VolumeConverter-uninst.exe", 
        "C:\\Program Files\\Carestream\\Volume Converter\\VolumeConverter.exe", 
        "C:\\Program Files\\Carestream\\CS3DSuite-light-uninst.exe", 
        "C:\\Program Files\\Carestream\\3D Visualization Application\\3DImagingSoftware.exe", 
        "C:\\Program Files\\Carestream\\3D Visualization Application\\3DViewer-uninst.exe", 
        "C:\\Program Files\\Carestream\\3D Visualization Application\\Setup3DViewer.exe", 
        "C:\\Program Files\\Carestream\\3D Visualization Application\\ViewData.exe", 
        "C:\\Program Files\\Carestream\\Film Composer\\FilmComposer.exe", 
        "C:\\Program Files\\Carestream\\Film Composer\\storescu.exe", 
        "C:\\Program Files\\Carestream\\Film Composer\\UninstallFilmComposer.exe", 
        "C:\\Program Files\\Carestream\\Quick Burn\\QuickBurn.exe", 
        "C:\\Program Files\\Carestream\\Quick Burn\\Uninstall-QuickBurn-Carestream.exe", 
        "C:\\Program Files\\Carestream\\Report Editor\\ReportEditor-uninst.exe", 
        "C:\\Program Files\\Carestream\\Report Editor\\ReportEditor.exe", 

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
