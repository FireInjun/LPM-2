import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindow: Electron.BrowserWindow;

function createWindow(){
  // create the browser window
  mainWindow = new BrowserWindow({
    height: 800,
    width: 600,
})
}

// and load the index.html of the app.
mainWindow.loadFile(path.join(__dirname, "../index.html"));

// Open the devtools.
mainWindow.webContents.openDevTools();

//Emitted when the window is closed.
mainWindow.on("closed", () => {
  // Dereference the window object, usually you would store windows
  // in an array if your app supports multi windows, this is the time
  // when you should delete the corresponding element.
  mainWindow = null;
})

