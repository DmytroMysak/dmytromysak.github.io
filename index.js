const host = 'localhost';
const port = 1337;
const express = require('express');
const compress = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({
  limit: '1mb',
  extended: true,
  parameterLimit: 5,
}));

app.use(compress());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());


app.use(express.static(`${__dirname}/public`)); // use static files in ROOT/public folder

app.get('/', (request, response) => { // root dir
  response.send('Hello!!');
});

app.listen(port, host);
