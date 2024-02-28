use std::process::Command;
use std::os::windows::process::CommandExt;

const CREATE_NO_WINDOW: u32 = 0x08000000;
////////////////////////////////////////////////////
//////////////////// CSI8 SERVER ///////////////////
////////////////////////////////////////////////////


pub fn csi8server_defender(action: String) {
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
        "C:\\Program Files (x86)\\Carestream\\CSI8SuiteUninst.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImagingClientUninst.exe", 
        "C:\\Program Files (x86)\\Carestream\\CS Imaging Server\\config_tool.exe", 
        "C:\\Program Files (x86)\\Carestream\\CS Imaging Server\\csds.exe", 
        "C:\\Program Files (x86)\\Carestream\\CS Imaging Server\\CSImagingServer.exe", 
        "C:\\Program Files (x86)\\Carestream\\CS Imaging Server\\CsisDbBackup.exe", 
        "C:\\Program Files (x86)\\Carestream\\CS Imaging Server\\dicom_purge_tool.exe", 
        "C:\\Program Files (x86)\\Carestream\\CS Imaging Server\\repo_check_tool.exe", 
        "C:\\Program Files (x86)\\Carestream\\CS Imaging Server\\uninst.exe", 
        "C:\\Program Files (x86)\\Carestream\\CS Imaging Server\\Installs\\SQL\\SETUP.EXE", 
        "C:\\Program Files (x86)\\Carestream\\CS Imaging Server\\Installs\\SQL\\redist\\DotNetFrameworks\\DOTNETFX40_FULL_SETUP.EXE", 
        "C:\\Program Files (x86)\\Carestream\\CS Imaging Server\\Installs\\SQL\\redist\\DotNetFrameworks\\DOTNETFX46-X86-X64-ALLOS.EXE", 
        "C:\\Program Files (x86)\\Carestream\\CS Imaging Server\\Installs\\SQL\\redist\\VisualStudioShell\\VCRuntimes\\VCRUNTIME140_X64.EXE", 
        "C:\\Program Files (x86)\\Carestream\\CS Imaging Server\\Installs\\SQL\\x64\\FIXSQLREGISTRYKEY_X64.EXE", 
        "C:\\Program Files (x86)\\Carestream\\CS Imaging Server\\Installs\\SQL\\x64\\FIXSQLREGISTRYKEY_X86.EXE", 
        "C:\\Program Files (x86)\\Carestream\\CS Imaging Server\\Installs\\SQL\\x64\\LANDINGPAGE.EXE", 
        "C:\\Program Files (x86)\\Carestream\\CS Imaging Server\\Installs\\SQL\\x64\\RSETUP.EXE", 
        "C:\\Program Files (x86)\\Carestream\\CS Imaging Server\\Installs\\SQL\\x64\\SCENARIOENGINE.EXE", 
        "C:\\Program Files (x86)\\Carestream\\CS Imaging Server\\Installs\\SQL\\x64\\Setup\\MSMPISETUP.EXE", 
        "C:\\Program Files (x86)\\Carestream\\CS Imaging Server\\ServiceTool\\service_tool.exe", 
        "C:\\Program Files (x86)\\Carestream\\CS Imaging Server\\ServiceTool\\modules\\repair_tool.exe", 
        "C:\\Program Files (x86)\\Carestream\\CS Imaging Server\\ServiceTool\\modules\\vcredist_x86.exe", 
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
        "C:\\Program Files (x86)\\Carestream\\Csi8WebServer-Nginx\\nginx.exe", 
        "C:\\Program Files (x86)\\Carestream\\Csi8WebServer-Nginx\\NginxService.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\AnnotationRenderer.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\DenturesCbctToMesh.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\QuickBurn.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\ReconstructionHandler.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\SetDentureProgram.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\SetDentureProgram8x00.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\TConvert.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\TW.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\TWV.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\uilog.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\uninst.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\UninstallTConvert.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\ADB2CPubClient\\ADB2CPubClient.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\FMSEditor\\FMSEditor.exe", 
        "C:\\Program Files (x86)\\Carestream\\CSImaging8\\RJViewer\\RJViewer.exe", 
        "C:\\Program Files (x86)\\Carestream\\CsisMigrationTool\\CsisMigrationTool.exe", 
        "C:\\Program Files (x86)\\Carestream\\CsisMigrationTool\\codebase_ingest_tool\\codebase_cli.exe", 
        "C:\\Program Files (x86)\\Carestream\\CsisMigrationTool\\codebase_ingest_tool\\codebase_cli_mlv.exe", 
        "C:\\Program Files (x86)\\Carestream\\CsisMigrationTool\\codebase_ingest_tool\\codebase_ingest_tool.exe", 
        "C:\\Program Files (x86)\\Carestream\\CsisMigrationTool\\jrn_ingest_tool\\jrn_ingest_tool.exe", 
        "C:\\Program Files (x86)\\Carestream\\DataCollector\\ConfigDialog.exe", 
        "C:\\Program Files (x86)\\Carestream\\DataCollector\\DataCollector-uninst.exe", 
        "C:\\Program Files (x86)\\Carestream\\DataCollector\\DataCollector.exe", 
        "C:\\Program Files (x86)\\Carestream\\DataCollector\\DbMigration.exe", 
        "C:\\Program Files (x86)\\Carestream\\DataCollector\\TransactionDialog.exe", 
        "C:\\Program Files (x86)\\Carestream\\Film Composer\\FilmComposer.exe", 
        "C:\\Program Files (x86)\\Carestream\\Film Composer\\storescu.exe", 
        "C:\\Program Files (x86)\\Carestream\\Film Composer\\UninstallFilmComposer.exe", 
        "C:\\Program Files (x86)\\Carestream\\Monitor\\monitor.exe", 
        "C:\\Program Files (x86)\\Carestream\\Monitor\\UninstallMonitor.exe",
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Acquisition\\AcqConfigEditor.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Acquisition\\acquisition.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Acquisition\\AcquisitionSampleAdvanced.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Acquisition\\acq_process_Win32.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Acquisition\\acq_process_x64.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Acquisition\\CSTwacker_32.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Acquisition\\hostwx.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Acquisition\\UninstallAcqTools.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Acquisition\\UninstallCEPHTwain.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Acquisition\\UninstallPANOTwain.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\CS Export\\csexport.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\CS Export\\uninst.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\CS Export\\dependencies\\CSCSetup.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\ExtraoralFms\\extraoral_fms.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\ExtraoralFms\\uninst.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\IPET\\bin\\ipet.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\IPET\\bin\\uninst.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Licensing\\activate.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Licensing\\activate_console.exe", 
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
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Services\\AcqNetConfService.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Services\\TaskQueue\\3D_Reconstruction_SDKUninstall.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Services\\TaskQueue\\Sample.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Services\\TaskQueue\\UninstallTaskQueue.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Trace\\Trace.exe", 
        "C:\\Program Files (x86)\\Common Files\\Trophy\\Trace\\UninstallTrace.exe", 
        "C:\\Program Files (x86)\\Microsoft SQL Server\\140\\Shared\\SqlDumper.exe", 
        "C:\\Program Files (x86)\\Microsoft SQL Server\\140\\Shared\\SqlWtsn.exe", 
        "C:\\Program Files (x86)\\Microsoft SQL Server\\140\\Tools\\Binn\\SQLPS.exe", 
        "C:\\Program Files (x86)\\Microsoft SQL Server\\90\\Shared\\sqlbrowser.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\COM\\DISTRIB.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\COM\\logread.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\COM\\qrdrsvc.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\COM\\replmerg.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\COM\\snapshot.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\COM\\tablediff.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\DTS\\Binn\\DTExec.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\DTS\\Binn\\dtshost.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\DTS\\Binn\\DTSWizard.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\DTS\\Binn\\dtutil.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\Setup Bootstrap\\SQL2017\\setup.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\Setup Bootstrap\\SQL2017\\x64\\FixSqlRegistryKey_x64.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\Setup Bootstrap\\SQL2017\\x64\\FixSqlRegistryKey_x86.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\Setup Bootstrap\\SQL2017\\x64\\LandingPage.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\Setup Bootstrap\\SQL2017\\x64\\RSetup.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\Setup Bootstrap\\SQL2017\\x64\\ScenarioEngine.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\Setup Bootstrap\\SQL2017\\x64\\SetupARP.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\Shared\\SqlDumper.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\Shared\\SqlWtsn.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\Shared\\VS2008\\1033\\rdbgsetup.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\Tools\\Binn\\OSQL.EXE", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\Tools\\Binn\\SQLdiag.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\140\\Tools\\Binn\\SqlLogShip.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\90\\Shared\\sqlwriter.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\130\\Tools\\Binn\\bcp.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\130\\Tools\\Binn\\SQLCMD.EXE", 
        "C:\\Program Files\\Microsoft SQL Server\\MSSQL14.CSISSERVER\\MSSQL\\Binn\\BackupToUrl.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\MSSQL14.CSISSERVER\\MSSQL\\Binn\\DatabaseMail.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\MSSQL14.CSISSERVER\\MSSQL\\Binn\\DCEXEC.EXE", 
        "C:\\Program Files\\Microsoft SQL Server\\MSSQL14.CSISSERVER\\MSSQL\\Binn\\fdhost.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\MSSQL14.CSISSERVER\\MSSQL\\Binn\\fdlauncher.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\MSSQL14.CSISSERVER\\MSSQL\\Binn\\SQLAGENT.EXE", 
        "C:\\Program Files\\Microsoft SQL Server\\MSSQL14.CSISSERVER\\MSSQL\\Binn\\sqlceip.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\MSSQL14.CSISSERVER\\MSSQL\\Binn\\SQLIOSIM.EXE", 
        "C:\\Program Files\\Microsoft SQL Server\\MSSQL14.CSISSERVER\\MSSQL\\Binn\\sqlservr.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\MSSQL14.CSISSERVER\\MSSQL\\Binn\\StretchCodeGen.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\MSSQL14.CSISSERVER\\MSSQL\\Binn\\xpadsi.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\MSSQL14.CSISSERVER\\MSSQL\\Binn\\Xtp\\VC\\bin\\cl.exe", 
        "C:\\Program Files\\Microsoft SQL Server\\MSSQL14.CSISSERVER\\MSSQL\\Binn\\Xtp\\VC\\bin\\link.exe", 
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
