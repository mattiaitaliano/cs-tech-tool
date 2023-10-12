// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod csi8;
mod utilities;
mod utility;

fn main() {
    tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![utilities::open_file, utilities::open_exe, utilities::open_folder, utility::firewall::open_firewall, utility::computer_ip::get_ip, utility::activation::reset_activation_client, csi8::nbus_data::delete_nbus_data])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
