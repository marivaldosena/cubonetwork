const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const helmet = require('helmet');
const bodyParser = require('body-parser');
var validator = require('express-validator');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(helmet());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(validator());

app.get('/employees', (req, res) => {
  let employees = [
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Moura',
      share: 5
    },
    {
      id: 2,
      name: 'Fernanda',
      lastname: 'Oliveira',
      share: 15
    },
    {
      id: 3,
      name: 'Hugo',
      lastname: 'Silva',
      share: 20
    },
    {
      id: 4,
      name: 'Eliza',
      lastname: 'Souza',
      share: 20
    },
    {
      id: 5,
      name: 'Anderson',
      lastname: 'Santos',
      share: 40
    }
  ];

  res.json(employees);
});

app.post('/employees', (req, res) => {
  let name = req.body.name;
  let lastname = req.body.lastname;
  let share = req.body.share;

  req.checkBody('name').exists().isLength({ min: 3 });
  req.checkBody('lastname').exists().isLength({ min: 3 });
  req.checkBody('share').exists().isInt({ gt: 0});

  const errors = req.validationErrors();

  if (errors) {
    /* Status 422: Unprocessable Entity */
    res.status(422).json({ errors: errors });
    return;
  }

  let employee = { id: Math.floor(Math.random() * 100), name, lastname, share };

  res.status(200).json(employee);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'server', 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on port ${port}`));
