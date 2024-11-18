const fs = require('fs');

// Charger le fichier item.json
const filePath = './item.json'; // Chemin vers votre fichier
const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Parcourir les items pour ajuster leur iconPath
Object.values(jsonData).forEach(item => {
    // Modifier le chemin de l'icône pour correspondre à votre structure
    item.iconPath = `../images/items/${item.id}.png`;
});

// Sauvegarder le fichier mis à jour
fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf8');
console.log('Le fichier item.json a été mis à jour avec succès !');
