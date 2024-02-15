// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod csi8;
mod utilities;
mod utility;
mod activation;
mod open_tool;

fn main() {
    tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
        utilities::open_file, 
        utilities::copy_file, 
        utilities::open_exe, 
        utilities::open_folder, 
        activation::reset_activation::reset_activation_client, 
        csi8::nbus_data::delete_nbus_data,
        csi8::csdmlite::reset_csdmlite, 
        open_tool::open_tool, 
        open_tool::open_boardsave,
        utility::cssecurity::cssecurity_defender_rules, 
        utility::cssecurity::cssecurity_firewall_rules, 
        utility::cssecurity::cssecurity_security_rules,
        utility::systeminfo::specifics_checking
        ])         
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
