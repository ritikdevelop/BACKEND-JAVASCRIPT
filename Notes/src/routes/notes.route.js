const express = require('express');
const notesController = require('../controller/notes.controller');


const router = express.Router();

router.post('/notes', notesController.createNote);
router.put('/notes/:id', notesController.UpdateNote);
router.delete('/notes/:id', notesController.DeleteNote);

module.exports = router;
