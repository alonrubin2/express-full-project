const express = require('express');
const routes = express.Router();
const Tasks = require('../controllers/tasks');
const Albums = require('../controllers/albums')


// CREATE Task
routes.put('/task', Tasks.createTask);

// GET All Tasks
routes.get('/task', Tasks.getAllTasks);

// Delete Task
routes.delete('/task/:id', Tasks.deleteTask);

// Find Specific Task
routes.get('/task/:id', Tasks.findTask);

// Edit Task
routes.post('/task/:id', Tasks.editTask);



// CREATE Album
routes.put('/album', Albums.createAlbum);

// GET All Albums
routes.get('/album', Albums.getAllAlbums);

// Delete Album
routes.delete('/album/:id', Albums.deleteAlbum);

// Find Specific Album
routes.get('/album/:id', Albums.findAlbum);

// Edit Album
routes.post('/album/:id', Albums.editAlbum);




module.exports = routes;