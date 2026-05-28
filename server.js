const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from DevOps sample app!');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);git commit -am "Trigger CI/CD build12"
});