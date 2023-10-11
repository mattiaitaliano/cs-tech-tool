// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod csi8;
mod utilities;
mod utility;

fn main() {
    tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![utilities::open_folder, csi8::firewall::open_firewall, utility::computer_ip::get_ip, utility::activation::reset_activation_client])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
