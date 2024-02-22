# Define variables MUST ABSOLUTELY IN FIRST
param(
    [string]$vmName,
    [string]$vmPath,
    [string]$osType,
    [string]$ramSize,
    [string]$vramSize,
    [string]$storageSize
)

cd "C:\Program Files\Oracle\VirtualBox"

try {
    # Creation de la machine virtuelle
    .\VBoxManage.exe createvm --name $vmName --ostype $osType --register --basefolder $vmPath

    Write-Host "La machine virtuelle $vmName a ete creer avec succes." -ForegroundColor Green
}
catch {
    Write-Host "Erreur : Impossible de creer la machine virtuelle. $_" -ForegroundColor Red
}

# Configuration de la machine virtuelle
.\VBoxManage.exe modifyvm $vmName --memory $ramSize --vram $vramSize
.\VBoxManage.exe createhd --filename "$vmPath\$vmName\$vmName.vdi" --size $storageSize
.\VBoxManage.exe storagectl $vmName --name "SATA Controller" --add sata --controller IntelAhci
.\VBoxManage.exe storageattach $vmName --storagectl "SATA Controller" --port 0 --device 0 --type hdd --medium "$vmPath\$vmName\$vmName.vdi"
