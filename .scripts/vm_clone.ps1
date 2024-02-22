# Define variables MUST ABSOLUTELY IN FIRST
param(
    [string]$vmName,
    [string]$cloneName,
    [string]$clonePath
)

cd "C:\Program Files\Oracle\VirtualBox"

# Check if any of the variables are empty
if (-not $vmName -or -not $cloneName -or -not $clonePath) {
    Write-Host "Error: One or more parameters are empty."
    exit
}

try {
    # Clonnage de la machine virtuelle
    .\VBoxManage.exe clonevm "$vmName" --name "$cloneName" --register --basefolder "$clonePath"
    
    Write-Host "La machine virtuelle $VMName a ete cloner avec succes." -ForegroundColor Green
} 
catch {
    Write-Host "Erreur : Impossible de cloner la machine virtuelle. $_" -ForegroundColor Red
}
