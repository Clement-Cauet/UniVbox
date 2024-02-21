const { exec } = require('child_process');

// Define the PowerShell script path
const powershellScriptPath = 'C:/wamp64/www/UniVbox/.scripts/vm_clone.ps1';

const vmName    = 'UbuntuTest-18.04';
const cloneName = 'UbuntuTest-18.04_Cloned';
const clonePath = 'C:/Users/Clement/VirtualBox VMs/Virtual Machine';

const command = `powershell.exe -File ${powershellScriptPath} -vmName ${vmName} -cloneName ${cloneName} -clonePath ${clonePath}`;

// Execute PowerShell script with variables
exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing PowerShell script: ${error}`);
        return;
    }

    // Handle successful execution
    console.log('PowerShell script executed successfully.');
    console.log('Output:');
    console.log(stdout);
});