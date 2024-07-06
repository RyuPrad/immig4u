const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const todosRouter = require('./todos');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('frontend/dist'));

app.get('/', (req, res) => {
  res.send('Hello from the PERN stack app!');
});

app.use('/api/todos', todosRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
