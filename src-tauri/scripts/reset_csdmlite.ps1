$sysConfFile = "C:\Program Files (x86)\Carestream\CSDML\sys.conf"
$xmlConfFile = "C:\ProgramData\TW\CSDMLite\csdm.config.xml"

# Check if configuration files exist
if (-not (Test-Path $sysConfFile)) {
    Write-Output "ERROR: sys.conf file not found."
    exit
}
if (-not (Test-Path $xmlConfFile)) {
    Write-Output "ERROR: sys.config.xml file not found."
    exit
}

# Check if CSDMLite process is running
if (Get-Process 'CSDMLite' -ErrorAction SilentlyContinue) {
    # Stop CSDMLite Service
    try {
        Get-Process 'CSDMLite' | Stop-Process -Force
        Write-Output "SUCCESS: CSDMLite process is now stopped."
    } catch {
        Write-Output "ERROR: Failed to stop CSDMLite process."
        exit
    }
} else {
    Write-Output "WARNING: CSDMLite process is not running."
}

# Modify sys.conf file
try {
    $lines = Get-Content $sysConfFile
    $lines[247] = $lines[247] -replace '9999', '10001'
    $lines | Set-Content $sysConfFile
    Write-Output "SUCCESS: The port 999 has been modified correctly."
} catch {
    Write-Output "ERROR: Failed to modify sys.conf file."
    exit
}

# Modify sys.config.xml file
try {
    [xml]$xmlContent = Get-Content $xmlConfFile
    $xmlContent.trophy.local.property | Where-Object { $_.key -eq 'httpPort' } | ForEach-Object { $_.value = '9940' }
    $xmlContent.trophy.local.property | Where-Object { $_.key -eq 'acqPort' } | ForEach-Object { $_.value = '9941' }
    $xmlContent.trophy.local.property | Where-Object { $_.key -eq 'defaultPort' } | ForEach-Object { $_.value = '9940' }
    $xmlContent.Save($xmlConfFile)
    Write-Output "SUCCESS: The file csdmlite.config.xml has been modified correctly."
} catch {
    Write-Output "ERROR: Failed to modify sys.config.xml file."
    exit
}

# Restart CSDMLite process
$csdmLitePath = "C:\Program Files (x86)\Carestream\CSDML\CSDMLite.exe" 

try {
    if (-not (Test-Path $csdmLitePath)) {
        Write-Output "ERROR: CSDMLite executable not found at $csdmLitePath."
        exit
    }
    Start-Process -FilePath $csdmLitePath -WindowStyle Hidden
    Write-Output "Success: Configuration files updated and CSDMLite process restarted."
} catch {
    Write-Output "ERROR: Failed to start CSDMLite process."
    exit
}
