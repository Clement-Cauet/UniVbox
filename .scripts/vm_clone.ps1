# Define variables MUST ABSOLUTELY IN FIRST
param(
    [string]$vmName,
    [string]$cloneName,
    [string]$clonePath
)

# Change directory to where VirtualBox is installed
cd "C:\Program Files\Oracle\VirtualBox"

Write-Host "vmName: $vmName"
Write-Host "cloneName: $cloneName"
Write-Host "clonePath: $clonePath"

# Check if any of the variables are empty
if (-not $vmName -or -not $cloneName -or -not $clonePath) {
    Write-Host "Error: One or more parameters are empty."
    exit
}

# Clone the VM
try {
    .\VBoxManage.exe clonevm "$vmName" --name "$cloneName" --register --basefolder "$clonePath"
    Write-Host "VM cloned successfully."
} catch {
    Write-Host "Error cloning VM: $_"
}
