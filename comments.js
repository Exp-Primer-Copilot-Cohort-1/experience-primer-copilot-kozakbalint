// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use the public folder
app.use(express.static('public'));

// Use the comments router
const commentsRouter = require('./commentsRouter');
app.use('/comments', commentsRouter);

// Start the web server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});