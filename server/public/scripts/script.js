// Fonction pour rafraîchir le tableau des machines virtuelles
function refreshVMList() {
    fetch('/vm-list')
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('vm_list');
            table.innerHTML = '';

            data.vms.forEach(vm => {
                const row = table.insertRow();
                
                const nameCell = row.insertCell();
                nameCell.textContent = vm;

                const buttonCell = row.insertCell();

                const cloneButton = document.createElement('button');
                cloneButton.textContent = 'Cloner';
                cloneButton.onclick = function() {
                    document.getElementById('form_clone').style.display = 'block';
                    document.getElementById('cloneButton').addEventListener('click', function() {
                        const cloneName = document.getElementById('cloneNameInput').value;
                        const clonePath = document.getElementById('clonePathInput').value;
                        
                        fetch('/vm-clone?vmName=' + vm + '&cloneName=' + cloneName + '&clonePath=' + clonePath)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            alert(data.message);
                            document.getElementById('form_clone').style.display = 'none';
                            refreshVMList();
                        });
                    });
                };
                buttonCell.appendChild(cloneButton);

                const startButtonNormal = document.createElement('button');
                startButtonNormal.textContent = 'Démarrage Normal';
                startButtonNormal.onclick = function() {
                    fetch('/vm-start?vmName=' + vm)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            alert(data.message);
                        });
                };
                buttonCell.appendChild(startButtonNormal);

                const startButtonNoDisplay = document.createElement('button');
                startButtonNoDisplay.textContent = 'Démarrage sans affichage';
                startButtonNoDisplay.onclick = function() {
                    fetch('/vm-start-noDisplay?vmName=' + vm)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            alert(data.message);
                        });
                };
                buttonCell.appendChild(startButtonNoDisplay);

                const finishButton = document.createElement('button');
                finishButton.textContent = 'Eteindre';
                finishButton.onclick = function() {
                    fetch('/vm-finish?vmName=' + vm)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            alert(data.message);
                        });
                };
                buttonCell.appendChild(finishButton);

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Supprimer';
                deleteButton.onclick = function() {
                    fetch('/vm-delete?vmName=' + vm)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            alert(data.message);
                            refreshVMList();
                        });
                };
                buttonCell.appendChild(deleteButton);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Appeler la fonction de rafraîchissement lorsque la page est chargée
window.onload = function() {
    refreshVMList();
};

document.getElementById('vm_create').addEventListener('click', function() {
    document.getElementById('form_create').style.display = 'block';
    document.getElementById('createButton').addEventListener('click', function() {
        const vmName = document.getElementById('createNameInput').value;
        const vmPath = document.getElementById('createPathInput').value;
        const osType = document.getElementById('createOsTypeInput').value;
        const ramSize = document.getElementById('createRamSizeInput').value;
        const vramSize = document.getElementById('createVramSizeInput').value;
        const storageSize = document.getElementById('createStorageSizeInput').value;
        
        fetch('/vm-create?vmName=' + vmName + '&vmPath=' + vmPath + '&osType=' + osType + 'ramSize=' + ramSize + '&vramSize=' + vramSize + '&storageSize=' + storageSize)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert(data.message);
            document.getElementById('form_create').style.display = 'none';
            refreshVMList();
        });
    });
});


document.getElementById('form_create').style.display = 'none';
document.getElementById('form_clone').style.display = 'none';