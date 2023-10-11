// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod csi8;
mod utility;

fn main() {
    tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![utility::open_folder, csi8::firewall::open_firewall])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
