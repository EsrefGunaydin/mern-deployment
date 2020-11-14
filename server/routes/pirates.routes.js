const controller = require('../controllers/pirates.controller');

module.exports = app => {
    // Create
    app.post('/api/pirates', controller.createPirate);
    // Read All
    app.get('/api/pirates', controller.allPirates);
    // Read One
    app.get('/api/pirate/:id', controller.onePirate);
    // Update
    app.patch('/api/pirate/:id', controller.updatePirate);
    // Delete One
    app.delete('/api/pirate/:id', controller.deletePirate);
}