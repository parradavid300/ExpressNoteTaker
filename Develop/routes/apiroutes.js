
// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "../db/db.json"))
});
  
// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
app.post("/api/notes", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("../db/db.json"));
  const newNotes = req.body;
  newNotesid.id = uuid.v4();
  notes.push(newNotes);
  fs.writeFileSync("../db/db.json", JSON.stringify(notes))
  res.json(notes);
});