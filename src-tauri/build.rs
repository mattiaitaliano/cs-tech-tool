extern crate embed_resource;
fn main() {
  tauri_build::build();
  embed_resource::compile("app-name-manifest.rc", embed_resource::NONE);
}
