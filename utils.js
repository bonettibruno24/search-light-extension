import GLib from 'gi://GLib';

export function getBrowserList() {
  return [
    { name: 'System Default', command: 'xdg-open' },
    { name: 'Firefox', command: 'firefox' },
    { name: 'Google Chrome', command: 'google-chrome' },
    { name: 'Chromium', command: 'chromium-browser' },
    { name: 'Opera', command: 'opera' },
    { name: 'Brave', command: 'brave-browser' },
    { name: 'Vivaldi', command: 'vivaldi' },
  ];
}

function isBrowserInstalled(command) {
  try {
    const [success] = GLib.spawn_command_line_sync(`which ${command}`);
    return success;
  } catch (_) {
    return false;
  }
}

export function getAvailableBrowsers() {
  return getBrowserList().filter(b =>
    b.command === 'xdg-open' || isBrowserInstalled(b.command)
  );
}