const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Middleware để xử lý SSI
app.get('*', (req, res) => {
  const fs = require('fs');
  const filePath = path.join(__dirname, 'public', req.path);
  if (fs.existsSync(filePath)) {
    let html = fs.readFileSync(filePath, 'utf-8');
    html = html.replace(/<!--#include virtual="(.+?)" -->/g, (_, includePath) => {
      const includeFilePath = path.join(__dirname, 'public', includePath);
      return fs.existsSync(includeFilePath)
        ? fs.readFileSync(includeFilePath, 'utf-8')
        : '';
    });
    res.send(html);
  } else {
    res.status(404).send('Not Found');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
