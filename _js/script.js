document.addEventListener('DOMContentLoaded', function () {
    const vmListTable = document.getElementById('vm_list');

    // Fonction pour récupérer la liste des machines virtuelles depuis le serveur Node.js
    function fetchVMs() {
        fetch('/vms')
            .then(response => response.json())
            .then(vmNames => {
                // Insertion des noms des machines virtuelles dans le tableau HTML
                vmNames.forEach(vmName => {
                    const row = document.createElement('tr');
                    const cell = document.createElement('td');
                    cell.textContent = vmName;
                    row.appendChild(cell);
                    vmListTable.appendChild(row);
                });
            })
            .catch(error => console.error('Erreur lors de la récupération des machines virtuelles :', error));
    }

    // Appel de la fonction pour récupérer les machines virtuelles lors du chargement de la page
    fetchVMs();
});
