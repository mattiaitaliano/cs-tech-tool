use std::process::Command;
use std::os::windows::process::CommandExt;

const CREATE_NO_WINDOW: u32 = 0x08000000;
////////////////////////////////////////////////////
/////////////////////// 9600 ///////////////////////
////////////////////////////////////////////////////


pub fn cs9600_defender(action: String) {
    let paths = vec![
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\acquisition.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\AcquisitionSampleAdvanced.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\acq_process20_x64.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\acq_process_Win32.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\acq_process_x64.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\Uninstall_CS9600Proxy.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\DeviceStateAgent\\UninstallDeviceStateAgent_Dental.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\DeviceStateAgent\\Dental\\Application\\DeviceStateAgent.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GStreamer\\Uninstall_SetupGStreamer.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GStreamer\\bin\\gdbus.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GStreamer\\bin\\gdk-pixbuf-csource.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GStreamer\\bin\\gdk-pixbuf-query-loaders.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GStreamer\\bin\\gio-querymodules.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GStreamer\\bin\\glib-compile-schemas.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GStreamer\\bin\\gsettings.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GStreamer\\bin\\gst-device-monitor-1.0.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GStreamer\\bin\\gst-discoverer-1.0.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GStreamer\\bin\\gst-inspect-1.0.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GStreamer\\bin\\gst-launch-1.0.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GStreamer\\bin\\gst-play-1.0.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GStreamer\\bin\\gst-typefind-1.0.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GStreamer\\bin\\json-glib-format.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GStreamer\\bin\\json-glib-validate.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GStreamer\\libexec\\gstreamer-1.0\\gst-plugin-scanner.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GUIServer\\GuiServer.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GUIServer\\HkcuRegkeyAccess.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GUIServer\\UninstallGuiServerSyracuseV1.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GUIServerService\\GUIServerService.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\GUIServerService\\Uninstall_SetupGUIServerSyracuseV1Service.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\NagoyaWebView\\Nagoya_WebView.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\NagoyaWebView\\Uninstall_NagoyaWebView.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\nginx\\nginx.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\nginx\\NginxParserConf.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\NGinxService\\NGinxService.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\NGinxService\\Uninstall_SetupNGinxService.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\plugins\\AcqNagoyaProxy\\Uninstall_DriverCS9600Proxy.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\plugins\\AcqPluginIOScan\\Uninstall_AcqPluginIOScan.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\WorkStationDiscovery\\UninstallWorkStationDiscovery.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Acquisition\\WorkStationDiscovery\\WorkStationDiscovery_Client.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Services\\TaskQueue\\Sample.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Services\\TaskQueue\\TaskQueuePanel.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Services\\TaskQueue\\TaskQueuePluginProcess.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Services\\TaskQueue\\TaskQueueServer.exe", 
        "C:\\Program Files\\Common Files\\Trophy\\Services\\TaskQueue\\Tools\\CudaInfo.exe", 
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
