// Importation
const multer = require('multer');

// Fichiers MIME_TYPES
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif'
};

// Configuration du multer
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
      callback(null, 'images')
  },
  filename: (req, file, callback) => {
      // Récupère le nom d'origine sans l'extension et remplace les espaces par des underscores
      const name = file.originalname.split('.')[0].split(' ').join('_');
      const extension = MIME_TYPES[file.mimetype];
      // Ajoute un timestamp au nom pour le rendre unique
      callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({ storage }).single('image');