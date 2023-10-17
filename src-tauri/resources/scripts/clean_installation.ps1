# Kill  Services and Processes

Stop-Service -Name "CS Imaging Service" -Force -ErrorAction SilentlyContinue
Stop-Service -Name "CS Deployment Service" -Force -ErrorAction SilentlyContinue

Stop-Process -Name "monitor" -Force -ErrorAction SilentlyContinue
Stop-Process -Name "CSDMLite" -Force -ErrorAction SilentlyContinue
Stop-Process -Name "CS Imaging Server" -Force -ErrorAction SilentlyContinue
Stop-Process -Name "CSDMLewdog" -Force -ErrorAction SilentlyContinue
Stop-Process -Name "nginx" -Force -ErrorAction SilentlyContinue
Stop-Process -Name "nginx (32 bit)" -Force -ErrorAction SilentlyContinue
Stop-Process -Name "monitor (32 bit)" -Force -ErrorAction SilentlyContinue
Stop-Process -Name "CSDMLite (32 bit)" -Force -ErrorAction SilentlyContinue
Stop-Process -Name "CS Imaging Server (32 bit)" -Force -ErrorAction SilentlyContinue
Stop-Process -Name "CSDMLewdog (32 bit)" -Force -ErrorAction SilentlyContinue
Stop-Process -Name "NginxService (32 bit)" -Force -ErrorAction SilentlyContinue


# Run the core commands

Rename-Item -Path 'C:\Program Files (x86)\Carestream' -NewName 'Carestream_OLD'
Start-Process -FilePath 'C:\Program Files (x86)\Carestream_OLD\CSI8SuiteUninst.exe'
Remove-Item -Path 'HKCR:\Trophy' -Force
Remove-Item -Path 'HKCU:\Software\TROPHY' -Force
Remove-Item -Path 'HKCU:\Software\Classes\Trophy' -Force
Remove-Item -Path 'HKLM:\SOFTWARE\Classes\TROPHY' -Force
