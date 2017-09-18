import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import find from './routes/find';

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.set('view engine', 'pug');

app.use('/api/find', find);

app.get('/', (req,res) => {
  res.render('index');
});

var port = process.env.PORT || 3000;


app.listen(port, (req,res) => {
  console.log('App started on port 3000');
});
