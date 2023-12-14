# CS Tech Tool

The tool provides the user with a boundle of CSD tools to perform some automatizations on resolution of issues of CSD products. All of that is gathered in a GUI to enanche the experience.

## Index

1. [Installation](#installation)
2. [Stack](#stack)
3. [Flow](#flow)
4. [Implementation](#implementation)
5. [File System](#file-system)

## Installation

Step-by-step precedure from prerequisites to run

### Prerequisites

1. Install the [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) if the machine doesn't have at least **Visual Studio 2022**
2. Install [nvm windows](https://github.com/coreybutler/nvm-windows/releases) to install node.js on a native windows environment (as per [microsoft guide](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows)), followed by these commands on powershell with administrative permissions:

```
nvm install latest
nvm use {{latest}} # replace with your latest downloaded version
```
It will install node.js, npm and also yarn.
otherwise just install *npm* and *yarn* normally via node.js installation.

3. Install Rust via [rustup](https://www.rust-lang.org/tools/install) or via Powershell's winget:

```
winget install --id Rustlang.Rustup
```

4. It also uses WebView2 but should be already pre-installed in Windows. Otherwise, follow the [link](https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section) in case things don't work as expected.


### Installation of Dependencies

As the app already exist, just run the installation of the packages for both frontend and backend:

1. **Frontend**: package.json is in the upper level of the project's folder. So just run the installation of dependencies.

```
npm install
```

2. **Backend**: Rust uses Cargo build, so any backend dependency added in *src-tauri/Cargo.toml* will be installed directly during the building process.

### Run of the application and build

To **run the application** just open the terminal and perform the following command:

```
yarn tauri dev
```

This will launch you the application in developing mode, so the modification of the frontend are elaborated instantly and any editing of the backend cause an automatic reloading of the rust build.

To **build it** and test it a production environment, the prompt is:

```
yarn tauri build
```

This will create in the *release* folder a .exe file and the boundle to install it on msi x64 with all the static files and relative path, so the application could run entirely on a host computer without install or importing anything else then the setup file.

## Stack

The stack is choosen to minimise the weight of the app and adopt user-friendly and modern interfaces thanks to web-development technologies. 

It uses **tauri** as a framework to implement javascript, html and scss for the frontend without relating to a browser, while the backend is in Rust to maximise speed, security and efficiency.

The **frontend** is written using **React.js** adopted with a **typescript** template, using then HTML, CSS for content and styling. The choice of **typescript** is made to exploit its features of typization that grant a proper communication with the backend avoiding unexpected bugs related to variables and wrong memory usage.

The **backend** uses **rust** to write a robust and secure exchange with the computer with a low-level communcation. As in CSD we use hardware and tool that call action on file management, editing, registry and services, this could also scale in the future.

Rust can also be a strong "*Script caller*", so it is possible to consider also the implementation of *.ps1* files directly written in **Powershell** called by the backend.

Could be also possible implement **python** scripts for data visualization and manipulation, but that would be meaning installing a python interpreter within the program and make it more heavy in terms of memory. In this case, rust could be used as well for the same purpouses.

In case we need a **Database**, it could be simply integrated a communication via **SQL commands** or using an **ORM**. Similiarly, the application could have a simple access to any API to manage a possible interaction with our web services such as .

## Flow

The Flow of data from frontend to backend could be represented as the following:

The user click and uses forms/input/submit from the React component, saving the prompts and choices into a typescript functions and variables. 

These functions then invoke an asyncronous function that pass thanks to tauri the variables from frontend to the backend logic. Each typescript function is then linked to a rust function that perform the action required by the user or call the Powershell script that does so. These action directly operate on Windows. 

Then, the Rust function will return an array of string with the notification of the status (success or error) of that action so the frontend can display it. In case of functions that must return a result for the frontend (such as a query for a data e.g. asking to display the IP address), the Rust function will return a variable to the typescript function that fetch it to the React component that will print it in the desired frontend field.

## Implementation

An example that can be done for a future new tool implementation would be the following:

1. Modify as needed the frontend component and insert the button that call the typescript function
2. Write the typescript function that invoke with tauri the main.rs backend file
3. Write on a rust file the function that perform the action behind the tool ratio.
4. Import in main.rs the new function.

## File System

- /src - It contains the React modules and the typescript logic:
    - /src/components - Main components of navigation
    - /src/product_titles - Components for each macro product section
    - /src/static - Contain the typescript logic, the images and the scss style modules.
    - /src/tool_function - Stores all the typescript functions that invoke the backend
    - /src/utilities - Other Components utilised within the app

- /src-tauri - It Contains all the specific settings of Tauri, configuration files and Rust code.
    - src-tauri/icons - App's icons.
    - src-tauri/resources - Contains the tool's exe files and the technews' pdf of tools used.
    - src-tauri/scripts - Contains the Powershell scripts used by the backend.
    - src-tauri/src - File system of Rust logic, with main.rs and the folders with mods.
    - src-tauri/tauri.conf.json - Tauri's configuration file (such as for info, name, version and app window's settings).

- package.json - Configuration file of the project with all the dependencies.