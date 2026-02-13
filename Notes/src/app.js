const express = require('express');
const notesRoutes = require('./routes/notes.route');
const app = express();

app.use(express.json());




/* //Info: Title, description POST method /notes */

app.use("/api", notesRoutes);


// app.post ('/notes', (req, res) => {
//     console.log(req.body);
// });

module.exports = app;