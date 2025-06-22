const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const songs = require('./songs.json');

app.use(cors());
app.use(express.static('public'));

app.get('/api/songs', (req, res) => {
  const baseUrl = req.protocol + '://' + req.get('host');
  const updatedSongs = songs.map(song => ({
    ...song,
    url: `${baseUrl}${song.url}`
  }));
  res.json(updatedSongs);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
