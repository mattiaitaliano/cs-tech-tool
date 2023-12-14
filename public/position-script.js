import { app, screen, window } from '@tauri-apps/api';

app.listen('tauri://created', async () => {
  const win = await window.getCurrent();
  const primaryScreen = await screen.getPrimaryDisplay();
  
  // Your window dimensions
  const windowWidth = 1000;
  const windowHeight = 750;

  // Calculate the center position
  const centerX = (primaryScreen.bounds.width - windowWidth ) / 2;
  const centerY = (primaryScreen.bounds.height - windowHeight ) / 2;

  // Set the window position
  win.setPosition(centerX, centerY);
});
