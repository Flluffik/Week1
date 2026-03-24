const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для установки кастомных заголовков
app.use((req, res, next) => {
  res.setHeader('X-Author', '_fluffik_');
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.send('_fluffik_');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
