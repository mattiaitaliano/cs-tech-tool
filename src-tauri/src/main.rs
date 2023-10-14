// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod csi8;
mod utilities;
mod utility;
mod activation;
mod windows;

fn main() {
    tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![utilities::open_file, utilities::copy_file, utilities::open_exe, utilities::open_folder, utility::firewall::open_firewall, windows::computer_ip::get_ip, windows::disable_startup::disable_startup, activation::reset_activation::reset_activation_client, csi8::nbus_data::delete_nbus_data, csi8::full_permission_db::full_permission_db, utility::visual_cpp::install_cpp, utility::dis_license::dis_license])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
