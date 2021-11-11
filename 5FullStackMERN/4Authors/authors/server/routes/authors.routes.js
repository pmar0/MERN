const AuthorController = require('../controllers/authors.controller');

module.exports = app => {
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.get('/api/authors/:id', AuthorController.findOneAuthor);
    app.put('/api/authors/:id', AuthorController.updateExistingAuthor);
    app.post('/api/authors', AuthorController.createNewAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteExistingAuthor);
}