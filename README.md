<div align="center">
 <img src="https://github.com/user-attachments/assets/679388be-6290-40c6-87f0-8f9ea3e4c2bf" width="200px">
 <h1>UniVbox</h1>
</div>

## Description
UniVbox est une application web en JavaScript et Node.js permettant la gestion de machines virtuelles à l'aide de scripts PowerShell exploitant les méthodes de VirtualBox.

## Fonctionnalités
- **Création de machines virtuelles** : Déployez de nouvelles VM avec des paramètres personnalisés.
- **Suppression de VM** : Supprimez rapidement les machines obsolètes.
- **Clonage de VM** : Dupliquez des environnements pour des tests rapides.
- **Lancement de VM** : Lancez des VM facilement en mode affichage ou non.
- **Interface web intuitive** : Gérez les VM depuis un navigateur sans passer par VirtualBox GUI.
![image](https://github.com/user-attachments/assets/610f21ab-d3e5-4348-8cbc-7d7e3d725134)

## Prérequis
- VirtualBox installé
- Node.js et npm installés
- Exécution de scripts PowerShell activée

## Installation
- Cloner le projet
```bash
git clone https://github.com/Clement-Cauet/UniVbox.git
cd UniVbox
```
- Installer les dépendances
 ```bash
npm install
```
- Lancer l'application
```bash
node ./server/app.js
```

## Technologies utilisées
- **Langage** : JavaScript (Node.js, Express)
- **Scripting** : PowerShell pour l'automatisation des actions VirtualBox
- **Interface utilisateur** : HTML, CSS, JavaScript
