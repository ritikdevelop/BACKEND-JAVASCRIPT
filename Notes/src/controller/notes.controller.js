const notesModel = require("../models/notes.model");

// Create a new note
const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newNote = new notesModel({ title, description });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ error: "Failed to create note" });
  }
};

async function UpdateNote(req, res) {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedNote = await notesModel.findByIdAndUpdate(
      id,
      { title, description },
      { new: true },
    );
    if (!updatedNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({ error: "Failed to update note" });
  }
}

async function DeleteNote(req, res) {
  try {
    const { id } = req.params;
    const deletedNote = await notesModel.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete note" });
  }
}

module.exports = { createNote, UpdateNote, DeleteNote };
