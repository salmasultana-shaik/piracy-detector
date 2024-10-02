const express = require('express');
const app = express();

// Middleware to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Route to handle keyword search
app.post('/search', (req, res) => {
  const { content, keyword } = req.body;

  // Check if the keyword is present in the content
  if (content.toLowerCase().includes(keyword.toLowerCase())) {
    res.json({ message: 'Potential piracy detected!' });
  } else {
    res.json({ message: 'No piracy detected.' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
