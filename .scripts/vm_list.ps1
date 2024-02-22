cd "C:\Program Files\Oracle\VirtualBox"

try {
    # Liste toutes les machines virtuelles
    .\VBoxManage.exe list vms
}
catch {
    Write-Host "Erreur : Impossible de lister les machines virtuelles. $_" -ForegroundColor Red
}