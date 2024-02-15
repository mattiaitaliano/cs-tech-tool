# Script pour exclure les process trophy dans Windows Defender
# version 1.0
# Auteur : Mathieu LASKI

# Force le type d'execution
Set-ExecutionPolicy Unrestricted

foreach($line in Get-Content .\bin\Paths\CSIPaths.txt) {
	Write-Output "$line"
	Remove-MpPreference -ExclusionPath "$line"
	Add-MpPreference -ExclusionPath "$line"
	# Start-Sleep -s 1
}

# Force le type d'execution
Set-ExecutionPolicy Restricted