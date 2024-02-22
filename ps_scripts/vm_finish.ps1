param(
    [string]$vmName
)

cd "C:\Program Files\Oracle\VirtualBox"

try {
    # Arrêt de la machine virtuelle si elle est en cours d'execution
    .\VBoxManage.exe controlvm $vmName poweroff

    Write-Host "La machine virtuelle $vmName a ete eteinte avec succes." -ForegroundColor Green
}
catch {
    Write-Host "Erreur : Impossible d'eteindre la machine virtuelle. $_" -ForegroundColor Red
}