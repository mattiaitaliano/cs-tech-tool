use std::process::Command;

////////////////////////////////////////////////////
/////////////////////// CSI7 ///////////////////////
////////////////////////////////////////////////////


pub fn csi7_defender(action: String) {
    let paths = vec![
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
        "C:\\Program Files\\Carestream\\Volume Converter\\VolumeConverter-uninst.exe", 
        "C:\\Program Files\\Carestream\\Volume Converter\\VolumeConverter.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSI Suite uninst.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\AcqTwain.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\codebase_cli.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\CSDMLite.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\CSDMLwdog.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\DIStoCSDMLite.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\export_ps.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\fttfx.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\shutdown_tool.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\uninstallCSDML.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\DcmToDis\\DcmToDis.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSDML\\DcmToDis\\DcmToDisUnsafe.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging\\CSI-uninst.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging\\FMSEditor.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging\\LicenseTWDlg.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging\\RJViewer.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging\\tc.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging\\TConvert.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging\\TrophyPreview.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging\\ts.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging\\TW.exe", 
        "C:\\Program Files (x86)\\Carestream\\Film Composer\\FilmComposer.exe", 
        "C:\\Program Files (x86)\\Carestream\\Film Composer\\storescu.exe", 
        "C:\\Program Files (x86)\\Carestream\\Film Composer\\UninstallFilmComposer.exe", 
        "C:\\Program Files (x86)\\Carestream\\Monitor\\monitor.exe", 
        "C:\\Program Files (x86)\\Carestream\\Monitor\\UninstallMonitor.exe", 
        "C:\\Program Files (x86)\\Carestream\\Patient Browser\\DicomConvertToFp.exe", 
        "C:\\Program Files (x86)\\Carestream\\Patient Browser\\DICOMDIRTool.exe", 
        "C:\\Program Files (x86)\\Carestream\\Patient Browser\\Patient.exe", 
        "C:\\Program Files (x86)\\Carestream\\Patient Browser\\uilog.exe", 
        "C:\\Program Files (x86)\\Carestream\\Patient Browser\\uninst.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Acquisition\\acquisition.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Acquisition\\AcquisitionSampleAdvanced.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Acquisition\\acq_process_Win32.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Acquisition\\acq_process_x64.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Acquisition\\CSAcqDmn.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\CSMeshRenderer\\uninst.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Installs\\Light_SetupRA_SDK.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Installs\\Light_Trophy_Acquisition_SDK_Install.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Installs\\Light_Trophy_Processings2D_SDK_with_Tools.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\IPET\\bin\\ipet.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\IPET\\bin\\uninst.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Licensing\\activate.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Licensing\\uninst.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Mesh Converter\\CSMeshConverter.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Mesh Converter\\UninstallCSMeshConverter.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Processing\\DicomConvertToFp.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Processing\\DicomImg.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Processing\\DicomPack.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Processing\\DicomPdf.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Processing\\processings2DEclipse\\EclipseUninstaller.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Processing\\processings2DPresets\\Factory\\FactoryPresetUninstaller.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\RA_SDK\\Appli DemoRA_SDK.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\RA_SDK\\Light_RA_SDKUninstaller.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\SDK\\Processings2D\\bin\\win32\\release\\Processings2DSampleAdvanced.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\SDK\\Processings2D\\bin\\win32\\release\\Processings2DSampleBasic.exe", 
        "C:\\Program Files (x86)\\Common Files\\Carestream\\Processing\\EclipseDBUninstall.exe", 
        "C:\\Program Files (x86)\\Common Files\\Carestream\\Processing\\Eclipse\\ImPrEclipse\\CreatePrImage.exe", 
        "C:\\Program Files (x86)\\Common Files\\Carestream\\Processing\\Eclipse\\ImPrEclipse\\EclipseProc.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\acquisition.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\AcquisitionSampleAdvanced.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\acq_process_Win32.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\acq_process_x64.exe", 
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
