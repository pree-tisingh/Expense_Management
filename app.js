const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', expenseRoutes);

sequelize.sync()
  .then(result => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => {
    console.error(err);
  });
