const { exec } = require('child_process');

function vm_list() {
    // Define the PowerShell script path
    const powershellScriptPath = 'C:/wamp64/www/UniVbox/.scripts/vm_start.ps1';
    const command = `powershell.exe -File ${powershellScriptPath}`;

    // Execute PowerShell script with variables
    executeCommand(command);
}

function vm_create() {
    // Define the PowerShell script path
    const powershellScriptPath = 'C:/wamp64/www/UniVbox/.scripts/vm_create.ps1';
    const vmName = 'UbuntuTest-18.04';
    const vmPath = 'C:/Users/Clement/VirtualBox VMs/Virtual Machine';
    const osType = 'Ubuntu';
    const ramSize = 2048;
    const vramSize = 128;
    const storageSize = 20000;

    const command = `powershell.exe -File ${powershellScriptPath} -vmName ${vmName} -vmPath ${vmPath} -osType ${osType} -ramSize ${ramSize} -vramSize ${vramSize} -storageSize ${storageSize}`;

    // Execute PowerShell script with variables
    executeCommand(command);
}

function vm_delete() {
    // Define the PowerShell script path
    const powershellScriptPath = 'C:/wamp64/www/UniVbox/.scripts/vm_delete.ps1';
    const vmName = 'UbuntuTest-18.04';
    const command = `powershell.exe -File ${powershellScriptPath} -vmName ${vmName}`;

    // Execute PowerShell script with variables
    executeCommand(command);
}

function vm_start() {
    // Define the PowerShell script path
    const powershellScriptPath = 'C:/wamp64/www/UniVbox/.scripts/vm_start.ps1';
    const vmName = 'UbuntuTest-18.04';
    const command = `powershell.exe -File ${powershellScriptPath} -vmName ${vmName}`;

    // Execute PowerShell script with variables
    executeCommand(command);
}

function vm_finish() {
    // Define the PowerShell script path
    const powershellScriptPath = 'C:/wamp64/www/UniVbox/.scripts/vm_finish.ps1';
    const vmName = 'UbuntuTest-18.04';
    const command = `powershell.exe -File ${powershellScriptPath} -vmName ${vmName}`;

    // Execute PowerShell script with variables
    executeCommand(command);
}

function vm_start_noDisplay() {
    // Define the PowerShell script path
    const powershellScriptPath = 'C:/wamp64/www/UniVbox/.scripts/vm_start_noDisplay.ps1';
    const vmName = 'UbuntuTest-18.04';
    const command = `powershell.exe -File ${powershellScriptPath} -vmName ${vmName}`;

    // Execute PowerShell script with variables
    executeCommand(command);
}

function vm_clone() {
    // Define the PowerShell script path
    const powershellScriptPath = 'C:/wamp64/www/UniVbox/.scripts/vm_clone.ps1';
    const vmName = 'UbuntuTest-18.04';
    const cloneName = 'UbuntuTest-18.04_Cloned';
    const clonePath = 'C:/Users/Clement/VirtualBox VMs/Virtual Machine';
    const command = `powershell.exe -File ${powershellScriptPath} -vmName ${vmName} -cloneName ${cloneName} -clonePath ${clonePath}`;

    // Execute PowerShell script with variables
    executeCommand(command);
}

function executeCommand(command) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing PowerShell script: ${error}`);
        } else {
            console.log('PowerShell script executed successfully.');
            console.log('Output:');
            console.log(stdout);
        }
    });
}

function unit_test() {
    vm_list();
    //vm_create();
    //vm_start();
    //vm_finish();
    //vm_start_noDisplay();
    vm_delete();
    vm_list();
}

// Appeler la fonction de test unitaire
unit_test();
