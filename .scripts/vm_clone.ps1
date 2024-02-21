# Change directory to where VirtualBox is installed
cd "C:\Program Files\Oracle\VirtualBox"

# Define variables
$vmName = "freeGLUT"
$cloneName = "freeGLUTCloned"

# Clone the VM
.\VBoxManage.exe clonevm $vmName --name $cloneName --register
